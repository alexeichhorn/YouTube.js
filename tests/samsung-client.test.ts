import { expect, test } from 'vitest';
import { Innertube } from '../dist/src/platform/node.js';

test('Samsung uses a matching TV identity without changing the session or standard TV client', async () => {
  const requests: Request[] = [];
  const innertube = await Innertube.create({
    generate_session_locally: true,
    retrieve_player: false,
    retrieve_innertube_config: false,
    fetch: async (input, init) => {
      requests.push(new Request(input, init));
      return new Response('{}', { headers: { 'Content-Type': 'application/json' } });
    }
  });
  const originalContext = structuredClone(innertube.session.context);
  await innertube.actions.execute('/player', { client: 'TV_SAMSUNG', videoId: 'test-video' });
  const request = requests[0];
  const body = await request.json();
  expect(request.headers.get('X-Youtube-Client-Name')).toBe('7');
  expect(request.headers.get('X-Youtube-Client-Version')).toBe('5.20260707');
  expect(request.headers.get('User-Agent')).toContain('SMART-TV; Linux; Tizen 2.4.0');
  expect(body.context.client).toMatchObject({
    clientName: 'TVHTML5', clientVersion: '5.20260707',
    deviceMake: 'Samsung', deviceModel: 'UKS9800',
    osName: 'Tizen', osVersion: '2.4.0', platform: 'TV',
    userAgent: request.headers.get('User-Agent')
  });
  expect(body.context.client).not.toHaveProperty('browserName');
  expect(body.context.client).not.toHaveProperty('browserVersion');
  expect(body.context.client).not.toHaveProperty('configInfo');
  expect(body).not.toHaveProperty('client');
  expect(innertube.session.context).toEqual(originalContext);

  await innertube.actions.execute('/player', { client: 'TV', videoId: 'test-video' });
  expect(requests[1].headers.get('X-Youtube-Client-Version')).toBe('7.20260311.12.00');
  expect((await requests[1].json()).context.client.userAgent).toContain('Cobalt');
});

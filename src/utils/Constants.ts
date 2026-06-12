
export const URLS = {
  YT_BASE: 'https://www.youtube.com',
  YT_MUSIC_BASE: 'https://music.youtube.com',
  YT_SUGGESTIONS: 'https://suggestqueries-clients6.youtube.com',
  YT_UPLOAD: 'https://upload.youtube.com/',
  API: {
    BASE: 'https://youtubei.googleapis.com',
    PRODUCTION_1: 'https://www.youtube.com/youtubei/',
    PRODUCTION_2: 'https://youtubei.googleapis.com/youtubei/',
    STAGING: 'https://green-youtubei.sandbox.googleapis.com/youtubei/',
    RELEASE: 'https://release-youtubei.sandbox.googleapis.com/youtubei/',
    TEST: 'https://test-youtubei.sandbox.googleapis.com/youtubei/',
    CAMI: 'http://cami-youtubei.sandbox.googleapis.com/youtubei/',
    UYTFE: 'https://uytfe.sandbox.google.com/youtubei/'
  },
  GOOGLE_SEARCH_BASE: 'https://www.google.com/'
} as const;
export const OAUTH = {
  REGEX: {
    TV_SCRIPT: new RegExp('<script\\s+id="base-js"\\s+src="([^"]+)"[^>]*><\\/script>'),
    CLIENT_IDENTITY: new RegExp('clientId:"(?<client_id>[^"]+)",[^"]*?:"(?<client_secret>[^"]+)"')
  }
} as const;
export const CLIENTS = {
  IOS: {
    NAME: 'iOS',
    VERSION: '20.10.4',
    USER_AGENT: 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)',
    DEVICE_MODEL: 'iPhone16,2',
    OS_NAME: 'iOS',
    OS_VERSION: '18.3.2'
  },
  IOS_DOWNGRADED: {
    NAME: 'iOS',
    VERSION: '19.49.7',
    USER_AGENT: 'com.google.ios.youtube/19.49.7 (iPhone16,2; U; CPU iOS 17_5_1 like Mac OS X;)',
    DEVICE_MODEL: 'iPhone16,2',
    OS_NAME: 'iOS',
    OS_VERSION: '17.5.1'
  },
  WEB: {
    NAME: 'WEB',
    VERSION: '2.20260206.01.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco',
    SUGG_EXP_ID: 'ytzpb5_e2,ytpo.bo.lqp.elu=1,ytpo.bo.lqp.ecsc=1,ytpo.bo.lqp.mcsc=3,ytpo.bo.lqp.mec=1,ytpo.bo.lqp.rw=0.8,ytpo.bo.lqp.fw=0.2,ytpo.bo.lqp.szp=1,ytpo.bo.lqp.mz=3,ytpo.bo.lqp.al=en_us,ytpo.bo.lqp.zrm=1,ytpo.bo.lqp.er=1,ytpo.bo.ro.erl=1,ytpo.bo.ro.mlus=3,ytpo.bo.ro.erls=3,ytpo.bo.qfo.mlus=3,ytzprp.ppp.e=1,ytzprp.ppp.st=772,ytzprp.ppp.p=5'
  },
  MWEB: {
    NAME: 'MWEB',
    VERSION: '2.20260205.04.01',
    API_VERSION: 'v1'
  },
  WEB_KIDS: {
    NAME: 'WEB_KIDS',
    VERSION: '2.20260205.00.00'
  },
  YTMUSIC: {
    NAME: 'WEB_REMIX',
    VERSION: '1.20250219.01.00'
  },
  ANDROID: {
    NAME: 'ANDROID',
    VERSION: '20.10.38',
    SDK_VERSION: 30,
    USER_AGENT: 'com.google.android.youtube/20.10.38 (Linux; U; Android 11) gzip'
  },
  ANDROID_SDKLESS: {
    NAME: 'ANDROID',
    VERSION: '21.02.35',
    USER_AGENT: 'com.google.android.youtube/21.02.35 (Linux; U; Android 11) gzip'
  },
  ANDROID_VR: {
    NAME: 'ANDROID_VR',
    VERSION: '1.65.10',
    SDK_VERSION: 32,
    USER_AGENT: 'com.google.android.apps.youtube.vr.oculus/1.65.10 (Linux; U; Android 12L; eureka-user Build/SQ3A.220605.009.A1) gzip',
    DEVICE_MAKE: 'Oculus',
    DEVICE_MODEL: 'Quest 3'
  },
  YTSTUDIO_ANDROID: {
    NAME: 'ANDROID_CREATOR',
    VERSION: '22.43.101'
  },
  YTMUSIC_ANDROID: {
    NAME: 'ANDROID_MUSIC',
    VERSION: '5.34.51'
  },
  TV: {
    NAME: 'TVHTML5',
    VERSION: '7.20250219.14.00',
    USER_AGENT: 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/25.lts.30.1034943-gold (unlike Gecko), Unknown_TV_Unknown_0/Unknown (Unknown, Unknown)'
  },
  TV_SIMPLY: {
    NAME: 'TVHTML5_SIMPLY',
    VERSION: '1.0'
  },
  TV_EMBEDDED: {
    NAME: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
    VERSION: '2.0'
  },
  WEB_EMBEDDED: {
    NAME: 'WEB_EMBEDDED_PLAYER',
    VERSION: '1.20260115.01.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  },
  WEB_CREATOR: {
    NAME: 'WEB_CREATOR',
    VERSION: '1.20241203.01.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  }
} as const;
/**
 * The keys correspond to the `NAME` fields in {@linkcode CLIENTS} constant
 */
export const CLIENT_NAME_IDS = {
  iOS: '5',
  WEB: '1',
  MWEB: '2',
  WEB_KIDS: '76',
  WEB_REMIX: '67',
  ANDROID: '3',
  ANDROID_VR: '28',
  ANDROID_CREATOR: '14',
  ANDROID_MUSIC: '21',
  TVHTML5: '7',
  TVHTML5_SIMPLY: '74',
  TVHTML5_SIMPLY_EMBEDDED_PLAYER: '85',
  WEB_EMBEDDED_PLAYER: '56',
  WEB_CREATOR: '62'
} as const;
export const STREAM_HEADERS = {
  'accept': '*/*',
  'origin': 'https://www.youtube.com',
  'referer': 'https://www.youtube.com',
  'DNT': '?1'
} as const;
export const INNERTUBE_HEADERS_BASE = {
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate',
  'content-type': 'application/json'
} as const;

export const SUPPORTED_CLIENTS = [ 'IOS', 'IOS_DOWNGRADED', 'WEB', 'MWEB', 'YTKIDS', 'YTMUSIC', 'ANDROID', 'ANDROID_VR', 'ANDROID_SDKLESS', 'YTSTUDIO_ANDROID', 'YTMUSIC_ANDROID', 'TV', 'TV_SIMPLY', 'TV_EMBEDDED', 'WEB_EMBEDDED', 'WEB_CREATOR' ];

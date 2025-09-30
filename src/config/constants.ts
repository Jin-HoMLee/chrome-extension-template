export const CONFIG = {
  HELP_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template#readme',
  SUPPORT_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template/issues',
  DOCUMENTATION_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template',
  RELEASES_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template/releases',
  DEVELOPER_URL: 'https://github.com/Jin-HoMLee',
  EXTENSION_NAME: 'Chrome Extension Template',
  VERSION: '1.0.0',
} as const;

export type ConfigType = typeof CONFIG;
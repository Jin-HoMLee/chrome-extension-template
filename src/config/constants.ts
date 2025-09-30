export const CONFIG = {
  HELP_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template#readme',
  SUPPORT_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template/issues',
  DOCUMENTATION_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template',
  RELEASES_URL: 'https://github.com/Jin-HoMLee/chrome-extension-template/releases',
  DEVELOPER_URL: 'https://github.com/Jin-HoMLee',
  EXTENSION_NAME: 'Chrome Extension Template',
  VERSION: '1.0.0',
} as const;

// Toast notification timing constants
export const TOAST_CONFIG = {
  SHOW_DURATION: 4000,
  TRANSITION_DURATION: 300,
  SHOW_DELAY: 100,
} as const;

// Content script DOM monitoring constants
export const DOM_CONFIG = {
  SIGNIFICANT_CHANGE_THRESHOLD: 5,
} as const;

export type ConfigType = typeof CONFIG;
export type ToastConfigType = typeof TOAST_CONFIG;
export type DomConfigType = typeof DOM_CONFIG;
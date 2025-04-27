export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fa'],
  labels: {
    en: 'English',
    fa: 'فارسی'
  }
} as const

export type Locale = typeof i18n['locales'][number]

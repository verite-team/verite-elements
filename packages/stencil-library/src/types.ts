import type { I18nConfig } from './utils/i18n'

export interface VeriteConfig {
  i18n?: Partial<I18nConfig>
  defaultLocale?: string
  locale?: string
  assetsPath?: string
  translations?: Record<string, any>
  fetchTranslations?: (locale: string) => Promise<Record<string, any>>
}

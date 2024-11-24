/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 */

export type * from './components.d.ts'
export { initialize } from './global'
export type { VeriteConfig } from './types'
export { getI18n } from './utils/i18n.js'
export type { I18nConfig, PluralType, TranslationDictionary } from './utils/i18n.js'

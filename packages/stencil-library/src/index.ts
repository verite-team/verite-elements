/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

// Initialize theme before rendering
// initializeTheme()

export type * from './components.d.ts'
export { init } from './global'
export { getI18nStore, setI18nStore } from './stores/i18n'
export type { VeriteConfig } from './types'
export { createI18nStore } from './utils/i18n'
export type { TranslatorOptions } from './utils/i18n'
console.log('you are here #3')

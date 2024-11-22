import { createStore } from '@stencil/store'

export const createLocale = (
  initialValue = typeof document === 'undefined' ? 'en' : (document?.documentElement?.lang ?? 'en'),
  beforeUpdate: (newLocale: string) => Promise<void> = async () => {}
) => {
  const { get, set, onChange: originalOnChange } = createStore({ value: initialValue })

  // Only set up DOM observer if in browser environment
  if (typeof document !== 'undefined') {
    originalOnChange('value', locale => {
      document.documentElement?.setAttribute('lang', locale)
    })
  }

  return {
    get: () => get('value'),
    set: async (newLocale: string, force = false): Promise<void> => {
      const currentValue = get('value')
      if (currentValue === newLocale && !force) return
      await beforeUpdate(newLocale)
      set('value', newLocale)
    },
    onChange: (cb: (value: string) => void) => originalOnChange('value', cb),
  }
}

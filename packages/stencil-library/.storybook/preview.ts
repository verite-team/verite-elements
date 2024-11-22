import '../src/themes/index.css'

import { Preview } from '@storybook/web-components'

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform: code => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      },
    },
    darkMode: {
      // classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      // current: 'dark',
      stylePreview: true,
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    // actions: { disable: true },
    // controls: { disable: true },
  },
  // decorators: [
  //   (Story, context) => {
  //     const isDark = context.globals.previewTheme === 'dark'

  //     document.documentElement.classList.remove('light', 'dark')
  //     document.documentElement.classList.add(isDark ? 'dark' : 'light')

  //     return Story()
  //   },
  // ],
}

export default preview

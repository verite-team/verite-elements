import '../src/themes/index.css'

import { Preview } from '@storybook/web-components'

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform: code => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      },
    },
    options: {
      storySort: {
        order: ['Elements', 'Components', 'Forms', 'Layout', '*'],
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
  },
}

export default preview

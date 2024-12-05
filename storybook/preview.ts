import '../src/themes/index.css'
import './globals.css'

import { Preview } from '@storybook/web-components'

const preview: Preview = {
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Controls the locale for the story',
      toolbar: {
        icon: 'globe',
        dynamicTitle: true,
        items: [
          { value: 'ar', title: 'Arabic' },
          { value: 'de', title: 'German' },
          { value: 'en', title: 'English' },
          { value: 'es', title: 'Spanish' },
          { value: 'fr', title: 'French' },
          { value: 'he', title: 'Hebrew' },
          { value: 'hi', title: 'Hindi' },
          { value: 'it', title: 'Italian' },
          { value: 'ja', title: 'Japanese' },
          { value: 'ko', title: 'Korean' },
          { value: 'pt', title: 'Portuguese' },
          { value: 'ru', title: 'Russian' },
          { value: 'zh', title: 'Chinese' },
        ],
        defaultValue: 'en',
      },
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.lang = context.globals.locale || 'en'
      return story()
    },
  ],
  parameters: {
    docs: {
      source: {
        transform: code => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Getting Started',
          'Features',
          'Customization',
          'FAQ',
          'Examples',
          'Contributing',
          'Elements',
          ['Signin', 'Signup', 'OTP'],
          'Connectors',
          'Components',
          'Forms',
          'Layout',
          '*',
        ],
      },
    },
    initialActive: 'Introduction',
    viewMode: 'docs',
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
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

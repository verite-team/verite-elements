import { addons } from '@storybook/manager-api'
import theme from './theme'

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    // collapsedRoots: ['Introduction'],
  },
  // theme: {
  //   brandTitle: 'Verite Elements', // Your title
  //   brandUrl: 'https://github.com/verite-team/verite-elements', // Optional: URL when title is clicked
  //   brandImage: './your-logo.png', // Path to your logo
  //   brandTarget: '_self', // Optional: Where the link should open
  // },
})

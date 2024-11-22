import { dirname, join } from 'path'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [{ from: '../dist/stencil-library', to: '/assets' }],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('storybook-dark-mode'),
    '@storybook/addon-actions',
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  previewHead: head => `
    ${head}
    <script type="module" src="./../www/build/stencil-library.esm.js"></script>
    <link rel="stylesheet" href="../src/themes/index.css">
    <link rel="stylesheet" href="../.storybook/index.css">
  `,
  viteFinal: async config => {
    config.plugins = [
      ...config.plugins,
      {
        name: 'markdown-loader',
        transform(code, id) {
          if (id.endsWith('.md')) {
            return {
              code: `export default ${JSON.stringify(code)}`,
              map: null,
            }
          }
        },
      },
    ]
    return config
  },
}
export default config

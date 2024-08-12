import { Meta, StoryObj } from '@storybook/web-components'

// import { fn } from '@storybook/test'
import { withActions } from '@storybook/addon-actions/decorator'

const metadata: Meta = {
  title: 'Components/my-component',
  component: 'my-component',
  tags: ['autodocs'],
  parameters: {
    // https://storybook.js.org/docs/essentials/actions
    actions: {
      handles: ['clicked'],
    },
    docs: {
      description: {
        component: 'This is a simple component',
      },
    },
    cssprops: {
      "my-component-background": {
        value: "white",
        description: "Optional description",
      },
    },
  },
  // args: { onClicked: fn() },
  // render: args => {
  //   const el = document.createElement('my-component')
  //   el.first = args.first
  //   el.middle = args.middle
  //   el.last = args.last
  //   el.addEventListener('clicked', args.onClicked)
  //   return el
  // },
  decorators: [withActions],
}
export default metadata

export const Example: StoryObj = {
  args: {
    first: 'First',
    middle: 'Middle',
    last: 'Last',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is an example of a simple component',
      },
      source: {
        code: `<my-component first="First" middle="Middle" last="Last"></my-component>`,
      },
    },
  },
}

export const LongName: StoryObj = {
  args: {
    ...Example.args,
    first: 'Alexander',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is an example of a simple component',
      },
      source: {
        code: `<my-component first="First" middle="Middle" last="Last"></my-component>`,
      },
    },
  },
}

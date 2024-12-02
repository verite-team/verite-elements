import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Elements/Google One Tap',
  component: 'vui-google-one-tap',
  id: 'elements-google-one-tap',
  argTypes: {
    // elevation: {
    //   control: 'select',
    //   options: ['none', 'sm', 'md', 'lg', 'xl'],
    //   description: 'Controls the shadow depth of the card',
    // },
  },
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => `<vui-google-one-tap google-client-id="1234567890"></vui-google-one-tap>`,
}

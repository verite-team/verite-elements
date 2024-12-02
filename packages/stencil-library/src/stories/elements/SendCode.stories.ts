import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Elements/Send Code',
  component: 'vui-send-code',
  id: 'elements-send-code',
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
  render: () => `
 <vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json"> 
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.email.title"
    description="$signin.email.description"
    prompt="$signin.email.prompt"
    action="$signin.email.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-auth-form action="email" elements='["email"]' submit-label="$signin.email.submit"></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>`,
}

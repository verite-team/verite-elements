import { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Elements/OTP',
  component: 'vui-otp',
  parameters: {
    componentSubtitle: 'One-time Password',
    docs: {
      description: {
        component:
          'A component for entering and validating one-time passwords (OTP). Commonly used for two-factor authentication and verification processes.',
      },
    },
  },
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => `
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    class="card--otp"
        elevation="lg"
        heading="$otp.title"
        description="$otp.description"
        prompt="$otp.prompt"
        action="$otp.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-otp submit-label="$otp.submit"></vui-otp>
  </vui-auth-card>
</vui-i18n-provider>
  `,
}

// Default.storyName = 'Default Stuff'

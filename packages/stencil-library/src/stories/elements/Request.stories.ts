import type { Meta, StoryObj } from '@storybook/web-components'

import { action } from '@storybook/addon-actions'
import { ButtonClickDetail } from '../../components'

const meta: Meta = {
  title: 'Elements/Permissions Request',
  component: 'vui-request',
  id: 'elements-request',
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
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json" 
  style="display: flex; flex-direction: column; gap: 24px; max-width: 420px; margin: 0 auto;">
  <vui-auth-alt-card elevation="lg" heading="$request.title" description="$request.description" size="xl">
    <vui-request
      application="Test App"
      permissions='["read profile", "write posts", "openid"]'
      redirect-uri="https://example.com"
    >
      <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    </vui-request>
    <vui-auth-footer slot="footer">
      <div style="text-align: center; padding: 1.5rem; line-height: 1.5">
        By continuing, you agree to our
        <vui-link href="https://example.com/terms">Terms of Service</vui-link> and
        <vui-link href="https://example.com/privacy">Privacy Policy</vui-link>
      </div>
    </vui-auth-footer>
  </vui-auth-alt-card>
</vui-i18n-provider>
  `,
  play: async ({ canvasElement }) => {
    const doc = canvasElement.ownerDocument

    const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
      action('buttonClick')(event)
    }

    doc.addEventListener('buttonClick', handleButtonClick)
  },
}

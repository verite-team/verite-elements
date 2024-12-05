import { Meta, StoryObj } from '@storybook/web-components'
import { ButtonClickDetail, FormSubmitDetail } from '../../components'

import { action } from '@storybook/addon-actions'

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
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
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
  play: async ({ canvasElement }) => {
    const doc = canvasElement.ownerDocument

    const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
      action('buttonClick')(event)
    }

    const handleFormSubmit = (event: CustomEvent<FormSubmitDetail>) => {
      action('formSubmit')(event)
    }
    doc.addEventListener('buttonClick', handleButtonClick)
    doc.addEventListener('formSubmit', handleFormSubmit)

    // Execute cleanup within the Promise
    await new Promise<void>(resolve => {
      const cleanup = () => {
        doc.removeEventListener('buttonClick', handleButtonClick)
        doc.removeEventListener('formSubmit', handleFormSubmit)
        resolve()
      }
      window.addEventListener('unload', cleanup)
    })
  },
}

// Default.storyName = 'Default Stuff'

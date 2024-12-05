import type { Meta, StoryObj } from '@storybook/web-components'
import { ButtonClickDetail, FormErrorDetail, FormSubmitDetail, LinkClickDetail } from '../../components'

import { action } from '@storybook/addon-actions'

// Add this import

const meta: Meta = {
  title: 'Elements/Signin',
  component: 'vui-signin',
  args: {
    action: action('signin'),
  },
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
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.default.title|product:Acme"
    description="$signin.default.description"
    brand-label="$brand.label"
    brand-logo="./verite-elements/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="google" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Google"}'></vui-i18n>
          </vui-flex>
        </vui-button>
      </vui-flex>
      <vui-divider orientation="horizontal" style="margin: 16px 0">
        <vui-i18n text="$signin.option"></vui-i18n>
      </vui-divider>
    </div>
    <vui-auth-form
      action="signin"
      display='["email", "password"]'
      submit-label="$authForm.submit"
      forgot-password-label="$authForm.forgotPassword"
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  `,
  play: async ({ canvasElement }) => {
    const doc = canvasElement.ownerDocument

    const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
      action('buttonClick')(event)
    }

    const handleLinkClick = (event: CustomEvent<LinkClickDetail>) => {
      action('linkClick')(event)
    }

    const handleFormError = (event: CustomEvent<FormErrorDetail>) => {
      action('formError')(event)
    }

    const handleFormSubmit = (event: CustomEvent<FormSubmitDetail>) => {
      action('formSubmit')(event)
    }

    // Add all listeners
    doc.addEventListener('buttonClick', handleButtonClick)
    doc.addEventListener('linkClick', handleLinkClick)
    doc.addEventListener('formError', handleFormError)
    doc.addEventListener('formSubmit', handleFormSubmit)

    // Execute cleanup within the Promise
    await new Promise<void>(resolve => {
      const cleanup = () => {
        doc.removeEventListener('buttonClick', handleButtonClick)
        doc.removeEventListener('linkClick', handleLinkClick)
        doc.removeEventListener('formSubmit', handleFormSubmit)
        doc.removeEventListener('formError', handleFormError)
        resolve()
      }

      // Attach cleanup to window unload or you can call it when needed
      window.addEventListener('unload', cleanup)
    })
  },
}

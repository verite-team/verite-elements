import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Components/Signup',
  component: 'vui-signup',
  argTypes: {
    labels: {
      control: 'object',
    },
    passwordValidation: {
      control: 'object',
    },
    emailValidation: {
      control: 'object',
    },
  },
  decorators: [
    Story => `
      <div style="width: 100%; max-width: 360px;">
        <vui-card elevation="3">
          ${Story()}
        </vui-card>
      </div>
    `,
  ],
}
export default meta

type Story = StoryObj

// Default configuration
export const Default: Story = {
  render: () => `
    <vui-signup></vui-signup>
  `,
}

// With Social Providers
export const WithSocialProviders: Story = {
  render: args => `
    <vui-signup>
      <div slot="providers">
        <vui-flex direction="column" gap="2" style="width: 100%">
          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="apple" size="20"></vui-logo>
              <vui-label>Sign up with Apple</vui-label>
            </vui-flex>
          </vui-button>

          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="google" size="20"></vui-logo>
              <vui-label>Sign up with Google</vui-label>
            </vui-flex>
          </vui-button>
        </vui-flex>
        <vui-divider orientation="horizontal" style="margin: 16px 0">
          <span>or</span>
        </vui-divider>
      </div>
    </vui-signup>
  `,
}

// With Custom Logo
export const WithCustomLogo: Story = {
  render: args => `
    <vui-signup>
      <div slot="logo">
        <img src="https://via.placeholder.com/40" alt="Company Logo" />
      </div>
    </vui-signup>
  `,
}

// With Custom Password Validation
export const WithPasswordValidation: Story = {
  render: () => `
    <vui-signup
      password-validation='{
        "minLength": 8,
        "requireUppercase": true,
        "requireLowercase": true,
        "requireNumbers": true,
        "requireSpecialChars": true
      }'
    ></vui-signup>
  `,
}

// With Email Domain Validation
export const WithEmailValidation: Story = {
  render: () => `
    <vui-signup
      email-validation='{
        "blockedDomains": ["gmail.com", "hotmail.com"]
      }'
    ></vui-signup>
  `,
}

// With Custom Labels
export const CustomLabels: Story = {
  render: () => `
    <vui-signup
      labels='{
        "title": "Join Our Platform",
        "description": "Create your account in seconds",
        "firstNameLabel": "Given Name",
        "firstNamePlaceholder": "Enter your given name",
        "lastNameLabel": "Family Name",
        "lastNamePlaceholder": "Enter your family name",
        "emailLabel": "Email Address",
        "emailPlaceholder": "Enter your email address",
        "passwordLabel": "Create Password",
        "passwordPlaceholder": "Enter a secure password",
        "showPasswordLabel": "Show password",
        "hidePasswordLabel": "Hide password",
        "signUpButtonText": "Create Account",
        "haveAccountText": "Already registered?",
        "signInButtonText": "Login here"
      }'
    >
      <div slot="providers">
        <vui-flex direction="column" gap="2" style="width: 100%">
          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="apple" size="20"></vui-logo>
              <vui-label>Join with Apple</vui-label>
            </vui-flex>
          </vui-button>

          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="google" size="20"></vui-logo>
              <vui-label>Join with Google</vui-label>
            </vui-flex>
          </vui-button>
        </vui-flex>
        <vui-divider orientation="horizontal" style="margin: 16px 0">
          <span>or</span>
        </vui-divider>
      </div>
    </vui-signup>
  `,
}

// With Custom Footer
export const CustomFooter: Story = {
  render: args => `
    <vui-signup>
      <div slot="footer">
        <vui-card-footer variant="inset">
          <vui-flex
            direction="column"
            valign="center"
            halign="center"
            gap="4"
            style="padding: 20px 0; color: hsl(var(--muted-foreground)); font-size: var(--font-size-sm)"
          >
            <span>By signing up, you agree to the following</span>
            <vui-flex gap="4" halign="center">
              <vui-link href="/terms-of-service">Terms of Service</vui-link>
              <vui-link href="/privacy-policy">Privacy Policy</vui-link>
            </vui-flex>
          </vui-flex>
        </vui-card-footer>
      </div>
    </vui-signup>
  `,
}

// Loading State
export const LoadingState: Story = {
  render: () => `
    <vui-signup is-loading="true"></vui-signup>
  `,
}

// All Features Combined
export const FullFeatured: Story = {
  render: () => `
    <vui-signup
      labels='{
        "title": "Join Our Platform",
        "description": "Create your account in seconds",
        "firstNameLabel": "Given Name",
        "firstNamePlaceholder": "Enter your given name",
        "lastNameLabel": "Family Name",
        "lastNamePlaceholder": "Enter your family name",
        "emailLabel": "Email Address",
        "emailPlaceholder": "Enter your work email",
        "passwordLabel": "Create Password",
        "passwordPlaceholder": "Enter a secure password",
        "showPasswordLabel": "Show password",
        "hidePasswordLabel": "Hide password",
        "signUpButtonText": "Create Account",
        "haveAccountText": "Already registered?",
        "signInButtonText": "Login here"
      }'
      password-validation='{
        "minLength": 8,
        "requireUppercase": true,
        "requireLowercase": true,
        "requireNumbers": true,
        "requireSpecialChars": true
      }'
      email-validation='{
        "blockedDomains": ["gmail.com", "hotmail.com"]
      }'
    >
      <div slot="logo">
        <img src="https://via.placeholder.com/40" alt="Company Logo" />
      </div>
      
      <div slot="providers">
        <vui-flex direction="column" gap="2" style="width: 100%">
          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="apple" size="20"></vui-logo>
              <vui-label>Join with Apple</vui-label>
            </vui-flex>
          </vui-button>

          <vui-button variant="outline" style="width: 100%">
            <vui-flex valign="center" gap="2">
              <vui-logo name="google" size="20"></vui-logo>
              <vui-label>Join with Google</vui-label>
            </vui-flex>
          </vui-button>
        </vui-flex>
        <vui-divider orientation="horizontal" style="margin: 16px 0">
          <span>or</span>
        </vui-divider>
      </div>
    </vui-signup>
  `,
}

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
        ${Story()}
      </div>
    `,
  ],
}
export default meta

type Story = StoryObj

// Move StoryWithCard definition before stories
const StoryWithCard = {
  render: (args: Record<string, string> = {}) => `
    <vui-card>
      <vui-signup ${Object.entries(args)
        .map(([key, value]) => `${key}='${value}'`)
        .join(' ')}>
        ${args.children}
      </vui-signup>
    </vui-card>
  `,
}

// Default configuration
export const Default: Story = {
  render: () => `
    <vui-signup></vui-signup>
  `,
}

export const Minimal: Story = {
  render: () => `
    <vui-signup>
      <span slot="header"></span>
      <span slot="providers"></span>
      <span slot="footer"></span>
    </vui-signup>
  `,
}

// With Social Providers
export const WithSocialProviders: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      children: `
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
    `,
    }),
}

// With Custom Logo
export const WithCustomLogo: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      children: `
      <div slot="logo">
        <img src="https://via.placeholder.com/40" alt="Company Logo" />
      </div>
    `,
    }),
}

// With Custom Password Validation
export const WithPasswordValidation: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      'password-validation': JSON.stringify({
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
      }),
    }),
}

// With Email Domain Validation
export const WithEmailValidation: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      'email-validation': JSON.stringify({
        blockedDomains: ['gmail.com', 'hotmail.com'],
      }),
    }),
}

// With Custom Labels
export const CustomLabels: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      labels: JSON.stringify({
        title: 'Join Our Platform',
        description: 'Create your account in seconds',
        firstNameLabel: 'Given Name',
        firstNamePlaceholder: 'Enter your given name',
        lastNameLabel: 'Family Name',
        lastNamePlaceholder: 'Enter your family name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        passwordLabel: 'Create Password',
        passwordPlaceholder: 'Enter a secure password',
        showPasswordLabel: 'Show password',
        hidePasswordLabel: 'Hide password',
        signUpButtonText: 'Create Account',
        haveAccountText: 'Already registered?',
        signInButtonText: 'Login here',
      }),
      children: `
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
    `,
    }),
}

// With Custom Footer
export const CustomFooter: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      children: `
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
    `,
    }),
}

// Loading State
export const LoadingState: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      'is-loading': 'true',
    }),
}

// All Features Combined
export const FullFeatured: Story = {
  ...StoryWithCard,
  render: () =>
    StoryWithCard.render({
      labels: JSON.stringify({
        title: 'Join Our Platform',
        description: 'Create your account in seconds',
        firstNameLabel: 'Given Name',
        firstNamePlaceholder: 'Enter your given name',
        lastNameLabel: 'Family Name',
        lastNamePlaceholder: 'Enter your family name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your work email',
        passwordLabel: 'Create Password',
        passwordPlaceholder: 'Enter a secure password',
        showPasswordLabel: 'Show password',
        hidePasswordLabel: 'Hide password',
        signUpButtonText: 'Create Account',
        haveAccountText: 'Already registered?',
        signInButtonText: 'Login here',
      }),
      'password-validation': JSON.stringify({
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
      }),
      'email-validation': JSON.stringify({
        blockedDomains: ['gmail.com', 'hotmail.com'],
      }),
      children: `
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
    `,
    }),
}

import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  ValidationRules,
} from '../../utils/validation'
import { SignInFormData, SignInLabels } from './signin-interfaces'

@Component({
  tag: 'vui-signin',
  styleUrl: 'signin.css',
  shadow: true,
})
export class Signin {
  @State() private email: string = ''
  @State() private password: string = ''
  @State() private showPassword: boolean = false
  // @State() private isLoading: boolean = false
  @State() private emailError: string = ''
  @State() private passwordError: string = ''
  @State() private isSubmitted: boolean = false

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  /** Labels for localization */
  @Prop() labels: SignInLabels = {
    title: 'Sign in to Acme Co',
    description: 'Welcome back! Please sign in to continue',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Password',
    showPasswordLabel: 'Show password',
    hidePasswordLabel: 'Hide password',
    forgotPasswordText: 'Forgot your password?',
    signInButtonText: 'Sign in',
    noAccountText: "Don't have an account?",
    signUpButtonText: 'Sign up',
  }

  /** Password validation options */
  @Prop() passwordValidation?: PasswordValidationOptions = {
    minLength: 8,
    requireUppercase: false,
    requireLowercase: false,
    requireNumbers: false,
    requireSpecialChars: false,
  }

  /** Email validation options */
  @Prop() emailValidation?: EmailValidationOptions | string

  /** Controls the loading state of the component */
  @Prop() isLoading?: boolean

  @Event() formSubmit: EventEmitter<SignInFormData>
  @Event() ready: EventEmitter<void>
  @Event() signUp: EventEmitter<void>

  private togglePasswordVisibility = () => {
    this.showPassword = !this.showPassword
  }

  private parsedEmailValidation(): EmailValidationOptions {
    try {
      if (typeof this.emailValidation === 'string') {
        return JSON.parse(this.emailValidation)
      }
      return this.emailValidation || {}
    } catch (error) {
      return {}
    }
  }

  componentWillLoad() {
    this.parsedEmailValidation()
    this.ready.emit()
  }

  private get emailRules(): ValidationRule[] {
    const rules = ValidationRules.createEmailRules(this.parsedEmailValidation())
    return rules
  }

  private get passwordRules(): ValidationRule[] {
    return ValidationRules.createPasswordRules(this.passwordValidation)
  }

  private validateField(value: string, rules: ValidationRule[]): string {
    for (const rule of rules) {
      if (!rule.validate(value)) {
        return rule.message
      }
    }
    return ''
  }

  private isFormValid(): boolean {
    const emailError = this.validateField(this.email, this.emailRules)
    const passwordError = this.validateField(this.password, this.passwordRules)
    return !emailError && !passwordError
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    this.isSubmitted = true

    this.emailError = this.validateField(this.email, this.emailRules)
    this.passwordError = this.validateField(this.password, this.passwordRules)

    if (this.isFormValid()) {
      this.formSubmit.emit({ email: this.email, password: this.password })
    }
  }

  private handleEmailInput = (e: InputEvent) => {
    const input = e.target as HTMLInputElement
    this.email = input.value

    if (this.isSubmitted) {
      this.emailError = this.validateField(this.email, this.emailRules)
    }
  }

  private handlePasswordInput = (e: InputEvent) => {
    const input = e.target as HTMLInputElement
    this.password = input.value

    // Only validate if the form has been submitted once
    if (this.isSubmitted) {
      this.passwordError = this.validateField(this.password, this.passwordRules)
    }
  }

  private handleSignUp = () => {
    this.signUp.emit()
  }

  render() {
    return (
      <Host part="signin">
        <slot name="header">
          <vui-card-header>
            <vui-flex direction="column" items="center" gap={4}>
              <div part="logo-container">
                <slot name="logo">
                  <vui-placeholder width={40} height={41}></vui-placeholder>
                </slot>
              </div>
              <vui-card-title halign="center">{this.labels.title}</vui-card-title>
              <vui-card-description halign="center">{this.labels.description}</vui-card-description>
            </vui-flex>
          </vui-card-header>
        </slot>

        <vui-card-content>
          <slot name="providers"></slot>

          <form onSubmit={this.handleSubmit}>
            <div class="form-field">
              <label class="sr-only" htmlFor="signin-email">
                {this.labels.emailLabel}
              </label>
              <vui-textbox
                id="signin-email"
                placeholder={this.labels.emailPlaceholder}
                type="email"
                autocapitalize="none"
                autocomplete="email"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.email}
                onInput={this.handleEmailInput}
                onEnterKey={this.handleSubmit}
              />
              <vui-error-message message={this.emailError} />
            </div>

            <div class="form-field password-field">
              <label class="sr-only" htmlFor="signin-password">
                {this.labels.passwordLabel}
              </label>
              <vui-textbox
                id="signin-password"
                placeholder={this.labels.passwordPlaceholder}
                type={this.showPassword ? 'text' : 'password'}
                autocomplete="current-password"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.password}
                onInput={this.handlePasswordInput}
                onEnterKey={this.handleSubmit}
              />
              <vui-error-message message={this.passwordError} />
              <vui-button
                variant="ghost"
                class="visibility-toggle"
                type="button"
                onClick={this.togglePasswordVisibility}
                aria-label={this.showPassword ? this.labels.hidePasswordLabel : this.labels.showPasswordLabel}
              >
                <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
              </vui-button>
            </div>

            <div class="forgot-password">
              <vui-link href="/forgot-password" exportparts="link">
                {this.labels.forgotPasswordText}
              </vui-link>
            </div>

            <vui-button type="submit" class="submit-button" busy={this.isLoading}>
              {this.labels.signInButtonText}
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <vui-flex direction="column" items="center" gap={4}>
              <div class="signup-prompt">
                <span>{this.labels.noAccountText}</span>
                <vui-button variant="outline" size="sm" onClick={this.handleSignUp}>
                  {this.labels.signUpButtonText}
                </vui-button>
              </div>
              <vui-divider orientation="horizontal"></vui-divider>
              <vui-powered-by label="Secured by Verite" class="powered-by"></vui-powered-by>
            </vui-flex>
          </vui-card-footer>
        </slot>
      </Host>
    )
  }
}

import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  ValidationRules,
} from '../../utils/validation'

import { i18n } from '../../stores/i18n'
import { SignInFormData } from './signin-interfaces'

const t = i18n.t

@Component({
  tag: 'vui-signin',
  styleUrl: 'signin.css',
  shadow: true,
})
export class Signin {
  @State() private email: string = ''
  @State() private password: string = ''
  @State() private showPassword: boolean = false
  @State() private emailError: string = ''
  @State() private passwordError: string = ''
  @State() private isSubmitted: boolean = false

  @Prop() showForgotPassword?: boolean = true

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

  @Event() forgotPassword: EventEmitter<void>
  @Event() formSubmit: EventEmitter<SignInFormData>

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

  private handleForgotPassword = () => {
    this.forgotPassword.emit()
  }

  async componentWillLoad() {
    await i18n.waitUntilReady
    // this.parsedEmailValidation()
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit}>
          <div class="form-field">
            <label class="sr-only" htmlFor="signin-email">
              {t('signin.email.label')}
            </label>
            <vui-textbox
              id="signin-email"
              placeholder={t('signin.email.placeholder')}
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
              {t('signin.password.label')}
            </label>
            <vui-textbox
              id="signin-password"
              placeholder={t('signin.password.placeholder')}
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
              aria-label={this.showPassword ? t('signin.password.hide') : t('signin.password.show')}
            >
              <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
            </vui-button>
          </div>

          {this.showForgotPassword && (
            <div class="forgot-password">
              <vui-link href="javascript:void(0)" onClick={this.handleForgotPassword} exportparts="link">
                {t('signin.forgotPassword')}
              </vui-link>
            </div>
          )}

          <vui-button type="submit" class="submit-button" busy={this.isLoading}>
            {t('signin.submit')}
          </vui-button>
        </form>
      </Host>
    )
  }
}

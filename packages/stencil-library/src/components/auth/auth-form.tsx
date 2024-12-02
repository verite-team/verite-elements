import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  createValidationRules,
} from '../../utils/validation'

import { toJSON } from '../../utils/toJSON'
import { I18nProvider } from '../i18n/i18n-provider'
import { SignUpFormData } from './types'

type Element = 'name' | 'email' | 'phone' | 'password' | 'forgotPassword'

@Component({
  tag: 'vui-auth-form',
  styleUrl: 'auth-form.css',
  shadow: true,
})
export class AuthForm {
  @Element() el!: HTMLElement

  private validationRules = createValidationRules(this.el)

  @State() private passwordVisible: boolean = false
  @State() private firstNameError: string = ''
  @State() private lastNameError: string = ''
  @State() private emailError: string = ''
  @State() private phoneError: string = ''
  @State() private passwordError: string = ''
  @State() private isSubmitted: boolean = false
  @State() elementsList: Element[] = []

  private _firstNameLabel = 'First name'
  private _lastNameLabel = 'Last name'
  private _emailLabel = 'Email'
  private _phoneLabel = 'Phone'
  private _passwordLabel = 'Password'

  @Prop() action: 'submit' | 'signup' | 'signin' | 'forgotPassword' | 'resetPassword' | 'resetLink' | 'code' = 'submit'
  @Prop() firstnameLabel = this._firstNameLabel
  @Prop() firstnamePlaceholder = this._firstNameLabel
  @Prop() lastnameLabel = this._lastNameLabel
  @Prop() lastnamePlaceholder = this._lastNameLabel
  @Prop() emailLabel = this._emailLabel
  @Prop() emailPlaceholder = this._emailLabel
  @Prop() phoneLabel = this._phoneLabel
  @Prop() phonePlaceholder = this._phoneLabel
  @Prop() passwordLabel = this._passwordLabel
  @Prop() passwordPlaceholder = this._passwordLabel
  @Prop() submitLabel = 'Submit'
  @Prop() forgotPasswordLabel = 'Forgot password?'
  @Prop() passwordShowLabel = 'Show password'
  @Prop() passwordHideLabel = 'Hide password'

  @Prop({ mutable: true }) firstName?: string = ''
  @Prop({ mutable: true }) lastName?: string = ''
  @Prop({ mutable: true }) email?: string = ''
  @Prop({ mutable: true }) phone?: string = ''
  @Prop({ mutable: true }) password?: string = ''

  @Prop({ reflect: true, mutable: true }) elements?: Element[] | string = []

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  @Event() formSubmit: EventEmitter<SignUpFormData>
  @Event() forgotPassword: EventEmitter<void>

  private togglePasswordVisibility = () => {
    this.passwordVisible = !this.passwordVisible
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

  private get firstNameRules(): ValidationRule[] {
    return this.validationRules.createNameRules(
      this.translate('$form.firstName.label', { default: this.firstnameLabel })
    )
  }

  private get lastNameRules(): ValidationRule[] {
    return this.validationRules.createNameRules(this.translate('$form.lastName.label', { default: this.lastnameLabel }))
  }

  private get emailRules(): ValidationRule[] {
    return [
      ...this.validationRules.createNameRules(this.translate('$form.email.label', { default: this.emailLabel })),
      ...this.validationRules.createEmailRules(this.parsedEmailValidation()),
    ]
  }

  private get phoneRules(): ValidationRule[] {
    return this.validationRules.createPhoneRules(this.translate('$form.phone.label', { default: this.phoneLabel }))
  }

  private get passwordRules(): ValidationRule[] {
    return [
      ...this.validationRules.createNameRules(this.translate('$form.password.label', { default: this.passwordLabel })),
      ...this.validationRules.createPasswordRules(this.passwordValidation),
    ]
  }

  private validateField(value: string, rules: ValidationRule[]): string {
    for (const rule of rules) {
      if (!rule.validate(value)) {
        return rule.message
      }
    }
    return ''
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    this.isSubmitted = true

    if (this.elements.includes('name')) {
      this.firstNameError = this.validateField(this.firstName, this.firstNameRules)
      this.lastNameError = this.validateField(this.lastName, this.lastNameRules)
    }
    if (this.elements.includes('email')) {
      this.emailError = this.validateField(this.email, this.emailRules)
    }
    if (this.elements.includes('phone')) {
      this.phoneError = this.validateField(this.phone, this.phoneRules)
    }
    if (this.elements.includes('password')) {
      this.passwordError = this.validateField(this.password, this.passwordRules)
    }

    if (!this.firstNameError && !this.lastNameError && !this.emailError && !this.phoneError && !this.passwordError) {
      this.formSubmit.emit({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })
    }
  }

  private handleInput = (field: 'firstName' | 'lastName' | 'email' | 'phone' | 'password') => (e: Event) => {
    const input = e.target as HTMLInputElement
    this[field] = input.value

    if (this.isSubmitted) {
      switch (field) {
        case 'firstName':
          this.firstNameError = this.validateField(this.firstName, this.firstNameRules)
          break
        case 'lastName':
          this.lastNameError = this.validateField(this.lastName, this.lastNameRules)
          break
        case 'email':
          this.emailError = this.validateField(this.email, this.emailRules)
          break
        case 'phone':
          this.phoneError = this.validateField(this.phone, this.phoneRules)
          break
        case 'password':
          this.passwordError = this.validateField(this.password, this.passwordRules)
          break
      }
    }
  }

  private handleForgotPassword = () => {
    this.forgotPassword.emit()
  }

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      return key
    }

    return provider.getTranslation(key, params)
  }

  async componentWillLoad() {
    if (typeof this.elements === 'string') {
      this.elementsList = toJSON<Element[]>(this.elements, [])
    } else {
      this.elementsList = this.elements
    }

    // Wait for provider to be ready
    await I18nProvider.getClosestProvider(this.el)?.waitForTranslations()
  }

  private getSubmitTranslationKey(): string {
    switch (this.action) {
      case 'signup':
        return '$form.submit.signup'
      case 'signin':
        return '$form.submit.signin'
      case 'code':
        return '$form.submit.code'
      case 'resetLink':
        return '$form.submit.sendResetLink'
      case 'resetPassword':
        return '$form.submit.resetPassword'
      default:
        return '$form.submit.label'
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.elementsList.includes('name') && (
          <vui-flex gap={2} direction="row" items="stretch" breakpointDirection="column" breakpoint="300px">
            <vui-form-input
              label={this.translate('$form.firstName.label', { default: this.firstnameLabel })}
              htmlFor="first-name"
              errorMessage={this.firstNameError}
            >
              <vui-textbox
                id="first-name"
                name="firstName"
                placeholder={this.translate('$form.firstName.placeholder', { default: this.firstnamePlaceholder })}
                autocapitalize="none"
                autocomplete="given-name"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.firstName}
                onInput={this.handleInput('firstName')}
                onEnterKey={this.handleSubmit}
              ></vui-textbox>
            </vui-form-input>

            <vui-form-input
              label={this.translate('$form.lastName.label', { default: this.lastnameLabel })}
              htmlFor="last-name"
              errorMessage={this.lastNameError}
            >
              <vui-textbox
                id="last-name"
                name="lastName"
                placeholder={this.translate('$form.lastName.placeholder', { default: this.lastnamePlaceholder })}
                autocomplete="family-name"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.lastName}
                onInput={this.handleInput('lastName')}
                onEnterKey={this.handleSubmit}
              ></vui-textbox>
            </vui-form-input>
          </vui-flex>
        )}

        {this.elementsList.includes('email') && (
          <vui-form-input
            label={this.translate('$form.email.label', { default: this.emailLabel })}
            htmlFor="email"
            errorMessage={this.emailError}
          >
            <vui-textbox
              id="email"
              name="email"
              placeholder={this.translate('$form.email.placeholder', { default: this.emailPlaceholder })}
              type="email"
              autocapitalize="none"
              autocomplete="email"
              autocorrect="off"
              disabled={this.isLoading}
              value={this.email}
              onInput={this.handleInput('email')}
              onEnterKey={this.handleSubmit}
            ></vui-textbox>
          </vui-form-input>
        )}

        {this.elementsList.includes('phone') && (
          <vui-form-input
            label={this.translate('$form.phone.label', { default: this.phoneLabel })}
            htmlFor="phone"
            errorMessage={this.phoneError}
          >
            <vui-textbox
              id="phone"
              name="phone"
              placeholder={this.translate('$form.phone.placeholder', { default: this.phonePlaceholder })}
              type="tel"
              autocapitalize="none"
              autocomplete="tel"
              autocorrect="off"
              disabled={this.isLoading}
              value={this.phone}
              onInput={this.handleInput('phone')}
              onEnterKey={this.handleSubmit}
            />
          </vui-form-input>
        )}

        {this.elementsList.includes('password') && (
          <vui-form-input
            label={this.translate('$form.password.label', { default: this.passwordLabel })}
            htmlFor="password"
            errorMessage={this.passwordError}
          >
            <vui-textbox
              id="password"
              name="password"
              placeholder={this.translate('$form.password.placeholder', { default: this.passwordPlaceholder })}
              type={this.passwordVisible ? 'text' : 'password'}
              autocorrect="off"
              disabled={this.isLoading}
              value={this.password}
              onInput={this.handleInput('password')}
              onEnterKey={this.handleSubmit}
            />
            <vui-button
              variant="ghost"
              class="visibility-toggle"
              type="button"
              disabled={this.isLoading}
              onClick={this.togglePasswordVisibility}
              aria-label={
                this.passwordVisible
                  ? this.translate('$form.password.hideLabel')
                  : this.translate('$form.password.showLabel')
              }
            >
              <vui-icon name={this.passwordVisible ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
            </vui-button>
          </vui-form-input>
        )}

        {this.elementsList.includes('forgotPassword') && (
          <div class="forgot-password">
            <vui-link href="javascript:void(0)" onClick={this.handleForgotPassword} exportparts="link">
              {this.translate('$form.forgotPassword.label', { default: this.forgotPasswordLabel })}
            </vui-link>
          </div>
        )}

        <vui-button type="submit" class="submit-button" busy={this.isLoading}>
          {this.translate(this.getSubmitTranslationKey(), { default: this.submitLabel })}
        </vui-button>
      </form>
    )
  }
}

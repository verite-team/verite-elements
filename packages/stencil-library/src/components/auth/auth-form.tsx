import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationError,
  ValidationRule,
  createValidationRules,
} from '../../utils/validation'

import { toJSON } from '../../utils/toJSON'
import { I18nProvider } from '../i18n/i18n-provider'
import { LinkClickDetail } from '../link/link'
import { FormSubmitDetail } from './types'

export type DisplayElement = 'name' | 'email' | 'phone' | 'password' | 'forgotPassword'

export interface FormErrorDetail {
  firstName?: ValidationError
  lastName?: ValidationError
  email?: ValidationError
  phone?: ValidationError
  password?: ValidationError
}

@Component({
  tag: 'vui-auth-form',
  styleUrl: 'auth-form.css',
  shadow: true,
})
export class AuthForm {
  @Element() el!: HTMLElement

  private validationRules = createValidationRules(this.el)

  @State() private passwordVisible: boolean = false
  @State() private firstNameError: ValidationError
  @State() private lastNameError: ValidationError
  @State() private emailError: ValidationError
  @State() private phoneError: ValidationError
  @State() private passwordError: ValidationError
  @State() private isSubmitted: boolean = false

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

  @Prop({ reflect: true, mutable: true }) display?: DisplayElement[] | string = []

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  @Event({ bubbles: true }) formError: EventEmitter<FormErrorDetail>
  @Event({ bubbles: true }) formSubmit: EventEmitter<FormSubmitDetail>
  @Event({ bubbles: true }) linkClick: EventEmitter<LinkClickDetail>

  private togglePasswordVisibility = () => {
    this.passwordVisible = !this.passwordVisible
  }

  /** Password validation options */
  @Prop() passwordValidation?: PasswordValidationOptions | string = {
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
      ...this.validationRules.createEmailRules(
        this.translate('$form.email.label', { default: this.emailLabel }),
        this.parsedEmailValidation()
      ),
    ]
  }

  private get phoneRules(): ValidationRule[] {
    return this.validationRules.createPhoneRules(this.translate('$form.phone.label', { default: this.phoneLabel }))
  }

  private parsedPasswordValidation(): PasswordValidationOptions {
    try {
      if (typeof this.passwordValidation === 'string') {
        return JSON.parse(this.passwordValidation)
      }
      return this.passwordValidation || {}
    } catch (error) {
      return {}
    }
  }

  private get passwordRules(): ValidationRule[] {
    return [
      ...this.validationRules.createPasswordRules(
        this.translate('$form.password.label', { default: this.passwordLabel }),
        this.parsedPasswordValidation()
      ),
    ]
  }

  private validateField(value: string, rules: ValidationRule[], fieldName: string): ValidationError | null {
    for (const rule of rules) {
      if (!rule.validate(value)) {
        return {
          field: fieldName,
          message: rule.message,
          rule: rule.name,
          value: value,
        }
      }
    }
    return null
  }

  private handleSubmit = (e: SubmitEvent | Event) => {
    e.preventDefault()
    this.isSubmitted = true

    const errors: Record<string, ValidationError> = {}

    if (this.display.includes('name')) {
      const firstNameResult = this.validateField(this.firstName, this.firstNameRules, 'firstName')
      const lastNameResult = this.validateField(this.lastName, this.lastNameRules, 'lastName')

      if (firstNameResult) {
        this.firstNameError = firstNameResult
        errors.firstName = firstNameResult
      }
      if (lastNameResult) {
        this.lastNameError = lastNameResult
        errors.lastName = lastNameResult
      }
    }

    if (this.display.includes('email')) {
      const emailResult = this.validateField(this.email, this.emailRules, 'email')
      if (emailResult) {
        this.emailError = emailResult
        errors.email = emailResult
      }
    }

    if (this.display.includes('phone')) {
      const phoneResult = this.validateField(this.phone, this.phoneRules, 'phone')
      if (phoneResult) {
        this.phoneError = phoneResult
        errors.phone = phoneResult
      }
    }

    if (this.display.includes('password')) {
      const passwordResult = this.validateField(this.password, this.passwordRules, 'password')
      if (passwordResult) {
        this.passwordError = passwordResult
        errors.password = passwordResult
      }
    }

    if (Object.keys(errors).length > 0) {
      this.formError.emit(errors)
      return
    }

    const detail: FormSubmitDetail = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      event: e,
    }
    this.formSubmit.emit(detail)
  }

  private handleInput = (field: 'firstName' | 'lastName' | 'email' | 'phone' | 'password') => (e: Event) => {
    const input = e.target as HTMLInputElement
    this[field] = input.value

    if (this.isSubmitted) {
      switch (field) {
        case 'firstName':
          this.firstNameError = this.validateField(this.firstName, this.firstNameRules, 'firstName')
          break
        case 'lastName':
          this.lastNameError = this.validateField(this.lastName, this.lastNameRules, 'lastName')
          break
        case 'email':
          this.emailError = this.validateField(this.email, this.emailRules, 'email')
          break
        case 'phone':
          this.phoneError = this.validateField(this.phone, this.phoneRules, 'phone')
          break
        case 'password':
          this.passwordError = this.validateField(this.password, this.passwordRules, 'password')
          break
      }
    }
  }

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      return key
    }

    return provider.getTranslation(key, params)
  }

  async componentWillLoad() {
    if (typeof this.display === 'string') {
      if (this.display.startsWith('[')) {
        // if starts with '[', it's a JSON string
        this.display = toJSON<DisplayElement[]>(this.display, [])
      } else {
        // if has a comma, it's a comma separated string
        this.display = this.display.split(',') as DisplayElement[]
      }
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
        {this.display.includes('name') && (
          <vui-flex gap={2} direction="row" items="stretch" breakpointDirection="column" breakpoint="300px">
            <vui-form-input
              label={this.translate('$form.firstName.label', { default: this.firstnameLabel })}
              htmlFor="first-name"
              errorMessage={this.firstNameError?.message}
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
                invalid={!!this.firstNameError}
                onInput={this.handleInput('firstName')}
                onEnterKey={this.handleSubmit}
              ></vui-textbox>
            </vui-form-input>

            <vui-form-input
              label={this.translate('$form.lastName.label', { default: this.lastnameLabel })}
              htmlFor="last-name"
              errorMessage={this.lastNameError?.message}
            >
              <vui-textbox
                id="last-name"
                name="lastName"
                placeholder={this.translate('$form.lastName.placeholder', { default: this.lastnamePlaceholder })}
                autocomplete="family-name"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.lastName}
                invalid={!!this.lastNameError}
                onInput={this.handleInput('lastName')}
                onEnterKey={this.handleSubmit}
              ></vui-textbox>
            </vui-form-input>
          </vui-flex>
        )}

        {this.display.includes('email') && (
          <vui-form-input
            label={this.translate('$form.email.label', { default: this.emailLabel })}
            htmlFor="email"
            errorMessage={this.emailError?.message}
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
              invalid={!!this.emailError}
              onInput={this.handleInput('email')}
              onEnterKey={this.handleSubmit}
            ></vui-textbox>
          </vui-form-input>
        )}

        {this.display.includes('phone') && (
          <vui-form-input
            label={this.translate('$form.phone.label', { default: this.phoneLabel })}
            htmlFor="phone"
            errorMessage={this.phoneError?.message}
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
              invalid={!!this.phoneError}
              onInput={this.handleInput('phone')}
              onEnterKey={this.handleSubmit}
            />
          </vui-form-input>
        )}

        {this.display.includes('password') && (
          <vui-form-input
            label={this.translate('$form.password.label', { default: this.passwordLabel })}
            htmlFor="password"
            errorMessage={this.passwordError?.message}
          >
            <vui-textbox
              id="password"
              name="password"
              placeholder={this.translate('$form.password.placeholder', { default: this.passwordPlaceholder })}
              type={this.passwordVisible ? 'text' : 'password'}
              autocorrect="off"
              disabled={this.isLoading}
              value={this.password}
              invalid={!!this.passwordError}
              onInput={this.handleInput('password')}
              onEnterKey={this.handleSubmit}
            />
            <vui-button
              variant="ghost"
              size="sm"
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

        {this.display.includes('forgotPassword') && (
          <div class="forgot-password">
            <vui-link name="forgotPassword" href="javascript:void(0)" exportparts="link">
              {this.translate('$form.forgotPassword.label', { default: this.forgotPasswordLabel })}
            </vui-link>
          </div>
        )}

        <vui-button name="submit" type="submit" class="submit-button" busy={this.isLoading}>
          {this.translate(this.getSubmitTranslationKey(), { default: this.submitLabel })}
        </vui-button>
      </form>
    )
  }
}

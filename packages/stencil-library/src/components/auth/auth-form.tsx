import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  ValidationRules,
} from '../../utils/validation'

import { SignUpFormData } from './types'
import { getI18nStore } from '../../stores/i18n'

const t = getI18nStore().t
const tif = getI18nStore().tif

type Element = 'name' | 'email' | 'phone' | 'password' | 'forgotPassword'

@Component({
  tag: 'vui-auth-form',
  styleUrl: 'auth-form.css',
  shadow: true,
})
export class AuthForm {
  @State() private passwordVisible: boolean = false
  @State() private firstNameError: string = ''
  @State() private lastNameError: string = ''
  @State() private emailError: string = ''
  @State() private phoneError: string = ''
  @State() private passwordError: string = ''
  @State() private isSubmitted: boolean = false

  @Prop() action: 'submit' | 'signup' | 'signin' | 'forgotPassword' | 'resetPassword' = 'submit'
  @Prop({ mutable: true }) firstName?: string = ''
  @Prop({ mutable: true }) lastName?: string = ''
  @Prop({ mutable: true }) email?: string = ''
  @Prop({ mutable: true }) phone?: string = ''
  @Prop({ mutable: true }) password?: string = ''
  @Prop({ mutable: true }) submitLabel?: string = ''

  @Prop({ reflect: true, mutable: true }) elements?: Element[] | string = []

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  @Element() el!: HTMLElement

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
    return ValidationRules.createNameRules('signup.firstName.label')
  }

  private get lastNameRules(): ValidationRule[] {
    return ValidationRules.createNameRules('signup.lastName.label')
  }

  private get emailRules(): ValidationRule[] {
    return ValidationRules.createEmailRules(this.parsedEmailValidation())
  }

  private get phoneRules(): ValidationRule[] {
    return ValidationRules.createPhoneRules()
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

  async componentWillLoad() {
    await getI18nStore().waitUntilReady
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.elements.includes('name') && (
          <vui-flex gap={2} direction="row" items="stretch" breakpointDirection="column" breakpoint="300px">
            <vui-form-input label={t('signup.firstName.label')} htmlFor="first-name" errorMessage={this.firstNameError}>
              <vui-textbox
                id="first-name"
                name="firstName"
                placeholder={t('form.firstName.placeholder')}
                autocapitalize="none"
                autocomplete="given-name"
                autocorrect="off"
                disabled={this.isLoading}
                value={this.firstName}
                onInput={this.handleInput('firstName')}
                onEnterKey={this.handleSubmit}
              ></vui-textbox>
            </vui-form-input>

            <vui-form-input label={t('signup.lastName.label')} htmlFor="last-name" errorMessage={this.lastNameError}>
              <vui-textbox
                id="last-name"
                name="lastName"
                placeholder={t('form.lastName.placeholder')}
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

        {this.elements.includes('email') && (
          <vui-form-input label={t('signup.email.label')} htmlFor="email" errorMessage={this.emailError}>
            <vui-textbox
              id="email"
              name="email"
              placeholder={t('form.email.placeholder')}
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

        {this.elements.includes('phone') && (
          <vui-form-input label={t('signup.phone.label')} htmlFor="phone" errorMessage={this.phoneError}>
            <vui-textbox
              id="phone"
              name="phone"
              placeholder={t('form.phone.placeholder')}
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

        {this.elements.includes('password') && (
          <vui-form-input label={t('form.password.label')} htmlFor="password" errorMessage={this.passwordError}>
            <vui-textbox
              id="password"
              name="password"
              placeholder={t('form.password.placeholder')}
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
              aria-label={this.passwordVisible ? t('form.password.hide') : t('form.password.show')}
            >
              <vui-icon name={this.passwordVisible ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
            </vui-button>
          </vui-form-input>
        )}

        {this.elements.includes('forgotPassword') && (
          <div class="forgot-password">
            <vui-link href="javascript:void(0)" onClick={this.handleForgotPassword} exportparts="link">
              {t('form.forgotPassword.label')}
            </vui-link>
          </div>
        )}

        <vui-button type="submit" class="submit-button" busy={this.isLoading}>
          {tif(this.submitLabel) || t('form.submit.label')}
        </vui-button>
      </form>
    )
  }
}

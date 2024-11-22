import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  ValidationRules,
} from '../../utils/validation'

import { i18n } from '../../stores/i18n'
import { SignUpFormData } from './signup-interfaces'

const t = i18n.t

@Component({
  tag: 'vui-signup',
  styleUrl: 'signup.css',
  shadow: true,
})
export class Signup {
  @State() private showPassword: boolean = false
  @State() private firstNameError: string = ''
  @State() private lastNameError: string = ''
  @State() private emailError: string = ''
  @State() private passwordError: string = ''
  @State() private isSubmitted: boolean = false

  @Prop({ mutable: true }) firstName?: string = ''
  @Prop({ mutable: true }) lastName?: string = ''
  @Prop({ mutable: true }) email?: string = ''
  @Prop({ mutable: true }) password?: string = ''

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  @Element() el!: HTMLElement
  @Event({ eventName: 'formSubmit', bubbles: true }) formSubmit: EventEmitter<SignUpFormData>
  // @Event({ bubbles: true }) ready: EventEmitter<void>
  private togglePasswordVisibility = () => {
    this.showPassword = !this.showPassword
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
    const firstNameError = this.validateField(this.firstName, this.firstNameRules)
    const lastNameError = this.validateField(this.lastName, this.lastNameRules)
    const emailError = this.validateField(this.email, this.emailRules)
    const passwordError = this.validateField(this.password, this.passwordRules)
    return !firstNameError && !lastNameError && !emailError && !passwordError
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    this.isSubmitted = true

    this.firstNameError = this.validateField(this.firstName, this.firstNameRules)
    this.lastNameError = this.validateField(this.lastName, this.lastNameRules)
    this.emailError = this.validateField(this.email, this.emailRules)
    this.passwordError = this.validateField(this.password, this.passwordRules)

    if (this.isFormValid()) {
      this.formSubmit.emit({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })
    }
  }

  private handleInput = (field: 'firstName' | 'lastName' | 'email' | 'password') => (e: Event) => {
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
        case 'password':
          this.passwordError = this.validateField(this.password, this.passwordRules)
          break
      }
    }
  }

  async componentWillLoad() {
    await i18n.waitUntilReady
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <vui-flex gap={2} direction="row" items="stretch" breakpointDirection="column" breakpoint="300px">
          <div class="form-field">
            <label class="sr-only" htmlFor="first-name">
              {t('signup.firstName.label')}
            </label>
            <vui-textbox
              id="first-name"
              name="firstName"
              placeholder={t('signup.firstName.placeholder')}
              autocapitalize="none"
              autocomplete="given-name"
              autocorrect="off"
              disabled={this.isLoading}
              value={this.firstName}
              onInput={this.handleInput('firstName')}
              onEnterKey={this.handleSubmit}
            />
            <vui-error-message message={this.firstNameError} />
          </div>

          <div class="form-field">
            <label class="sr-only" htmlFor="last-name">
              {t('signup.lastName.label')}
            </label>
            <vui-textbox
              id="last-name"
              name="lastName"
              placeholder={t('signup.lastName.placeholder')}
              autocomplete="family-name"
              autocorrect="off"
              disabled={this.isLoading}
              value={this.lastName}
              onInput={this.handleInput('lastName')}
              onEnterKey={this.handleSubmit}
            />
            <vui-error-message message={this.lastNameError} />
          </div>
        </vui-flex>

        <div class="form-field">
          <label class="sr-only" htmlFor="email">
            {t('signup.email.label')}
          </label>
          <vui-textbox
            id="email"
            name="email"
            placeholder={t('signup.email.placeholder')}
            type="email"
            autocapitalize="none"
            autocomplete="email"
            autocorrect="off"
            disabled={this.isLoading}
            value={this.email}
            onInput={this.handleInput('email')}
            onEnterKey={this.handleSubmit}
          />
          <vui-error-message message={this.emailError} />
        </div>

        <div class="form-field password-field">
          <label class="sr-only" htmlFor="password">
            {t('signup.password.label')}
          </label>
          <vui-textbox
            id="password"
            name="password"
            placeholder={t('signup.password.placeholder')}
            type={this.showPassword ? 'text' : 'password'}
            autocorrect="off"
            disabled={this.isLoading}
            value={this.password}
            onInput={this.handleInput('password')}
            onEnterKey={this.handleSubmit}
          />
          <vui-error-message message={this.passwordError} />
          <vui-button
            variant="ghost"
            class="visibility-toggle"
            type="button"
            disabled={this.isLoading}
            onClick={this.togglePasswordVisibility}
            aria-label={this.showPassword ? t('signup.password.hide') : t('signup.password.show')}
          >
            <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
          </vui-button>
        </div>

        <vui-button type="submit" class="submit-button" busy={this.isLoading}>
          {t('signup.submit')}
        </vui-button>
      </form>
    )
  }
}

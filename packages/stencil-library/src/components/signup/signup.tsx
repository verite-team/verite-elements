import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core'
import {
  EmailValidationOptions,
  PasswordValidationOptions,
  ValidationRule,
  ValidationRules,
} from '../../utils/validation'
import { SignUpFormData, SignUpLabels } from './signup-interfaces'

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

  /** Labels for localization */
  @Prop() labels: SignUpLabels = {
    // title: 'Sign up to Acme Co',
    // description: 'Welcome! Please fill in the details to get started.',
    firstNameLabel: 'First name',
    firstNamePlaceholder: 'First name',
    lastNameLabel: 'Last name',
    lastNamePlaceholder: 'Last name',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Password',
    showPasswordLabel: 'Show password',
    hidePasswordLabel: 'Hide password',
    signUpButtonText: 'Sign up',
    // haveAccountText: 'Already have an account?',
    // signInButtonText: 'Sign in',
  }

  @Element() el!: HTMLElement
  @Event({ bubbles: true }) submit: EventEmitter<SignUpFormData>
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
    return ValidationRules.createNameRules('First name')
  }

  private get lastNameRules(): ValidationRule[] {
    return ValidationRules.createNameRules('Last name')
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
      this.submit.emit({
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

  componentDidLoad() {
    console.log('componentDidLoad - labels:', this.labels)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <vui-flex gap={2} direction="row" items="stretch" breakpointDirection="column" breakpoint="300px">
          <div class="form-field">
            <label class="sr-only" htmlFor="first-name">
              {this.labels.firstNameLabel}
            </label>
            <vui-textbox
              id="first-name"
              name="firstName"
              placeholder={this.labels.firstNamePlaceholder}
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
              {this.labels.lastNameLabel}
            </label>
            <vui-textbox
              id="last-name"
              name="lastName"
              placeholder={this.labels.lastNamePlaceholder}
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
            {this.labels.emailLabel}
          </label>
          <vui-textbox
            id="email"
            name="email"
            placeholder={this.labels.emailPlaceholder}
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
            {this.labels.passwordLabel}
          </label>
          <vui-textbox
            id="password"
            name="password"
            placeholder={this.labels.passwordPlaceholder}
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
            aria-label={this.showPassword ? this.labels.hidePasswordLabel : this.labels.showPasswordLabel}
          >
            <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
          </vui-button>
        </div>

        <vui-button type="submit" class="submit-button" busy={this.isLoading}>
          {this.labels.signUpButtonText}
        </vui-button>
      </form>
    )
  }
}

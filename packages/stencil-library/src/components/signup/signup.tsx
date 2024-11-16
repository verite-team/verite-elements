import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'
import { SignUpFormData, SignUpLabels } from './signup-interfaces'

@Component({
  tag: 'vui-signup',
  styleUrl: 'signup.css',
  shadow: true,
})
export class Signup {
  @State() private firstName: string = ''
  @State() private lastName: string = ''
  @State() private email: string = ''
  @State() private password: string = ''
  @State() private showPassword: boolean = false
  @State() private isLoading: boolean = false

  @Prop() styles?: {
    link?: { [key: string]: string | number }
  }

  /** Labels for localization */
  @Prop() labels: SignUpLabels = {
    title: 'Sign up to Acme Co',
    description: 'Welcome! Please fill in the details to get started.',
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
    haveAccountText: 'Already have an account?',
    signInButtonText: 'Sign in',
  }

  @Element() el!: HTMLElement
  @Event() formSubmit: EventEmitter<SignUpFormData>
  @Event() ready: EventEmitter<void>
  @Event() signIn: EventEmitter<void>
  private togglePasswordVisibility = () => {
    this.showPassword = !this.showPassword
  }

  private handleSubmit = async (e: Event) => {
    e.preventDefault()

    const formData: SignUpFormData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }

    this.formSubmit.emit(formData)
  }

  private handleInput = (field: keyof SignUpFormData) => (e: Event) => {
    const input = e.target as HTMLInputElement
    this[field] = input.value
  }

  private handleSignIn = () => {
    this.signIn.emit()
  }

  componentDidLoad() {
    this.ready.emit()
  }

  render() {
    return (
      <Host part="signup">
        <slot name="header">
          <vui-card-header>
            <div part="logo-container">
              <slot name="logo">
                <vui-placeholder width={40} height={41}></vui-placeholder>
              </slot>
            </div>
            <vui-card-title halign="center">{this.labels.title}</vui-card-title>
            <vui-card-description halign="center">{this.labels.description}</vui-card-description>
          </vui-card-header>
        </slot>

        <vui-card-content>
          <slot name="providers"></slot>

          <form onSubmit={this.handleSubmit}>
            <vui-flex gap={2}>
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
                />
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
                />
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
              />
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
              />
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

            <vui-button type="submit" class="submit-button" disabled={this.isLoading}>
              {this.labels.signUpButtonText}
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <div class="signup-prompt">
              <span>{this.labels.haveAccountText}</span>
              <vui-button variant="outline" size="sm" onClick={this.handleSignIn}>
                {this.labels.signInButtonText}
              </vui-button>
            </div>
            <vui-divider orientation="horizontal"></vui-divider>
            <vui-powered-by label="Secured by Verite" class="powered-by"></vui-powered-by>
          </vui-card-footer>
        </slot>
      </Host>
    )
  }
}

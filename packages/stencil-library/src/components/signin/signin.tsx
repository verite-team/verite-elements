import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'
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
  @State() private isLoading: boolean = false

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

  @Event() formSubmit: EventEmitter<SignInFormData>
  @Event() ready: EventEmitter<void>
  @Event() signUp: EventEmitter<void>
  private togglePasswordVisibility = () => {
    this.showPassword = !this.showPassword
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    this.formSubmit.emit({ email: this.email, password: this.password })
  }

  private handleEmailInput = (e: InputEvent) => {
    const input = e.target as HTMLInputElement
    this.email = input.value
  }

  private handlePasswordInput = (e: InputEvent) => {
    const input = e.target as HTMLInputElement
    this.password = input.value
  }

  private handleSignUp = () => {
    this.signUp.emit()
  }

  componentDidLoad() {
    this.ready.emit()
  }

  render() {
    return (
      <Host part="signin">
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
              />
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

            <div class="forgot-password">
              <vui-link href="/forgot-password" exportparts="link">
                {this.labels.forgotPasswordText}
              </vui-link>
            </div>

            <vui-button type="submit" class="submit-button" disabled={this.isLoading}>
              {this.labels.signInButtonText}
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <div class="signup-prompt">
              <span>{this.labels.noAccountText}</span>
              <vui-button variant="outline" size="sm" onClick={this.handleSignUp}>
                {this.labels.signUpButtonText}
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

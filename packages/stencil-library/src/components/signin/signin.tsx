import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { SignInFormData } from './signin-interfaces'

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

  @Event() formSubmit: EventEmitter<SignInFormData>
  @Event() ready: EventEmitter<void>

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

  componentDidLoad() {
    this.ready.emit()
  }

  render() {
    return (
      <Host part="signin">
        <slot name="header">
          <vui-card-header>
            <div part="logo-container">
              <vui-placeholder width={40} height={41}></vui-placeholder>
            </div>
            <vui-card-title halign="center">Sign in to Acme Co</vui-card-title>
            <vui-card-description halign="center">Welcome back! Please sign in to continue</vui-card-description>
          </vui-card-header>
        </slot>

        <vui-card-content>
          <slot name="providers"></slot>

          <form onSubmit={this.handleSubmit}>
            <div class="form-field">
              <label class="sr-only" htmlFor="signin-email">
                Email
              </label>
              <vui-textbox
                id="signin-email"
                placeholder="Email"
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
                Password
              </label>
              <vui-textbox
                id="signin-password"
                placeholder="Password"
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
                aria-label={this.showPassword ? 'Hide password' : 'Show password'}
              >
                <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
              </vui-button>
            </div>

            <div class="forgot-password">
              <vui-link href="/forgot-password" exportparts="link">
                Forgot your password?
              </vui-link>
            </div>

            <vui-button type="submit" class="submit-button" disabled={this.isLoading}>
              Sign in
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <div class="signup-prompt">
              <span>Don't have an account?</span>
              <vui-button variant="outline" size="sm">
                Sign up
              </vui-button>
            </div>
            <vui-divider orientation="horizontal"></vui-divider>
            <vui-powered-by label="Secured by Verite" class="powered-by">
              {/* SVG logo */}
            </vui-powered-by>
          </vui-card-footer>
        </slot>
      </Host>
    )
  }
}

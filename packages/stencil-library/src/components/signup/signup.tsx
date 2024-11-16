import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { SignUpFormData } from './signup-interfaces'

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

  @Element() el!: HTMLElement
  @Event() formSubmit: EventEmitter<SignUpFormData>
  @Event() ready: EventEmitter<void>

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

  componentDidLoad() {
    this.ready.emit()
  }

  render() {
    return (
      <Host part="signup">
        <slot name="header">
          <vui-card-header>
            <div part="logo-container">
              <svg part="logo" width="40" height="41" viewBox="0 0 40 41" fill="none">
                {/* SVG path data */}
              </svg>
            </div>
            <vui-card-title halign="center">Sign up to Acme Co</vui-card-title>
            <vui-card-description halign="center">
              Welcome! Please fill in the details to get started.
            </vui-card-description>
          </vui-card-header>
        </slot>

        <vui-card-content>
          <slot name="providers"></slot>

          <form onSubmit={this.handleSubmit}>
            <vui-flex gap={2}>
              <div class="form-field">
                <label class="sr-only" htmlFor="first-name">
                  First name
                </label>
                <vui-textbox
                  id="first-name"
                  name="firstName"
                  placeholder="First name"
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
                  Last name
                </label>
                <vui-textbox
                  id="last-name"
                  name="lastName"
                  placeholder="Last name"
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
                Email
              </label>
              <vui-textbox
                id="email"
                name="email"
                placeholder="Email"
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
                Password
              </label>
              <vui-textbox
                id="password"
                name="password"
                placeholder="Password"
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
                aria-label={this.showPassword ? 'Hide password' : 'Show password'}
              >
                <vui-icon name={this.showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'} size="sm" />
              </vui-button>
            </div>

            <vui-button type="submit" class="submit-button" disabled={this.isLoading}>
              Sign up
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <div class="signup-prompt">
              <span>Already have an account?</span>
              <vui-button variant="outline" size="sm">
                Sign in
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

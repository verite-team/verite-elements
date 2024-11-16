import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { OtpLabels } from './otp-interfaces'

@Component({
  tag: 'vui-otp',
  styleUrl: 'otp.css',
  shadow: true,
})
export class Otp {
  @Element() el!: HTMLElement

  @Prop() labels: OtpLabels = {
    title: 'Verify your email',
    description: 'We sent a verification code to your email. Please enter it below.',
    verifyButtonText: 'Verify',
    noCodeText: "Didn't receive the code?",
    resendText: 'Resend',
    backToSignInText: 'Back to sign in',
    signInButtonText: 'Sign in',
  }

  @Event() formSubmit: EventEmitter<string>
  @Event() ready: EventEmitter<void>
  @Event() resend: EventEmitter<void>
  @State() code: string[] = []
  @State() activeIndex: number = 0

  private readonly codeLength = 6

  private focusActive() {
    setTimeout(() => {
      const activeTextbox = this.el.shadowRoot?.querySelector(`vui-textbox[name="code-${this.activeIndex}"]`)
      const input = activeTextbox?.shadowRoot?.querySelector('input')
      if (input) input.focus()
    }, 0)
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (['Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault()
      return
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault()
      this.handleDelete(e.key === 'Backspace')
    } else if (/^\d$/.test(e.key)) {
      e.preventDefault()
      this.handleDigitInput(e.key)
    }
  }

  private handleDelete(isBackspace: boolean) {
    this.code = [...this.code.slice(0, this.activeIndex), '', ...this.code.slice(this.activeIndex + 1, this.codeLength)]

    if (isBackspace && this.activeIndex > 0) {
      this.activeIndex--
      this.focusActive()
    }
  }

  private handleDigitInput(digit: string) {
    this.code = [
      ...this.code.slice(0, this.activeIndex),
      digit,
      ...this.code.slice(this.activeIndex + 1, this.codeLength),
    ]

    if (this.activeIndex < this.codeLength - 1) {
      this.activeIndex++
      this.focusActive()
    }
  }

  private handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    this.focusActive()
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    this.formSubmit.emit()
  }

  private handleResend = () => {
    this.resend.emit()
  }

  componentDidLoad() {
    this.focusActive()
    this.ready.emit()
  }

  render() {
    return (
      <Host part="otp" onKeyDown={this.handleKeyDown}>
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
          <form onSubmit={this.handleSubmit}>
            <vui-flex direction="row" halign="center" gap={2}>
              {Array.from({ length: this.codeLength }).map((_, index) => (
                <div class="form-field">
                  <vui-textbox
                    part={`input-${index}`}
                    name={`code-${index}`}
                    class={{
                      'code-input': true,
                      active: index === this.activeIndex,
                    }}
                    value={this.code[index] || ''}
                    readonly
                    tabindex="-1"
                    onMouseDown={this.handleMouseDown}
                    onClick={this.handleMouseDown}
                  />
                </div>
              ))}
            </vui-flex>

            <vui-button class="verify-button" type="submit" onClick={this.handleSubmit}>
              {this.labels.verifyButtonText}
            </vui-button>
          </form>
        </vui-card-content>

        <slot name="footer">
          <vui-card-footer variant="inset">
            <div class="footer-prompt">
              <span>{this.labels.noCodeText}</span>
              <vui-button variant="outline" size="sm" onClick={this.handleResend}>
                {this.labels.resendText}
              </vui-button>
            </div>
            <vui-divider orientation="horizontal"></vui-divider>
            {/* <div class="footer-prompt">
              <span>{this.labels.backToSignInText}</span>
              <vui-button variant="outline" size="sm">
                {this.labels.signInButtonText}
              </vui-button>
            </div> */}
            {/* <vui-divider orientation="horizontal"></vui-divider> */}
            <vui-powered-by label="Secured by Verite" class="powered-by"></vui-powered-by>
          </vui-card-footer>
        </slot>
      </Host>
    )
  }
}

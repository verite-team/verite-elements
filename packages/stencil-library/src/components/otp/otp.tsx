import { Component, Element, Event, EventEmitter, Host, State, h } from '@stencil/core'

@Component({
  tag: 'vui-otp',
  styleUrl: 'otp.css',
  shadow: true,
})
export class Otp {
  @Element() el!: HTMLElement
  @Event() formSubmit: EventEmitter<void>
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

  componentDidLoad() {
    this.focusActive()
  }

  render() {
    return (
      <Host part="otp" onKeyDown={this.handleKeyDown}>
        <div class="container">
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
            </form>
          </vui-card-content>
          <vui-card-footer>
            <vui-button class="verify-button" onSubmit={this.handleSubmit}>
              Verify
            </vui-button>
            <vui-flex direction="row" halign="center" gap={1}>
              <vui-label>Didn't receive the code?</vui-label>
              <vui-link href="/resend-code">Resend</vui-link>
            </vui-flex>
          </vui-card-footer>
        </div>
      </Host>
    )
  }
}

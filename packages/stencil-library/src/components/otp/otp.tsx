import { Component, Element, Event, EventEmitter, Host, State, h } from '@stencil/core'

@Component({
  tag: 'vui-otp',
  styleUrl: 'otp.css',
  shadow: true,
})
export class Otp {
  @Element() el!: HTMLElement

  @Event() formSubmit: EventEmitter

  @State() code: string[] = []

  @State() activeIndex: number = 0

  private codeLength = 6

  private focusActive() {
    setTimeout(() => {
      const activeTextbox = this.el.shadowRoot?.querySelector(`vui-textbox[name="code-${this.activeIndex}"]`)
      if (activeTextbox) {
        const input = activeTextbox.shadowRoot?.querySelector('input')
        if (input) input.focus()
      }
    }, 0)
  }

  // private handleInput = (index: number, e: any) => {
  //   const value = e.target.value
  //   console.log('value', value)
  //   // Only allow numbers
  //   if (!/^\d*$/.test(value)) return

  //   // Always take the last character entered
  //   const singleChar = value.slice(-1)
  //   console.log('singleChar', singleChar)

  //   // Update the code array, always replacing the current index
  //   this.code = [...this.code.slice(0, index), singleChar, ...this.code.slice(index + 1, this.codeLength)]

  //   // Move to next input after updating
  //   if (index < this.codeLength - 1) {
  //     setTimeout(() => {
  //       const nextTextbox = this.el.shadowRoot?.querySelector(`vui-textbox[name="code-${index + 1}"]`)
  //       if (nextTextbox) {
  //         const input = nextTextbox.shadowRoot?.querySelector('input')
  //         if (input) input.focus()
  //       }
  //     }, 0)
  //   }
  // }

  private handleKeyDown = (e: KeyboardEvent) => {
    // Prevent tab, arrows, and other navigation keys
    if (
      e.key === 'Tab' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown'
    ) {
      e.preventDefault()
      return
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault()

      // Clear current box regardless of position
      this.code = [
        ...this.code.slice(0, this.activeIndex),
        '',
        ...this.code.slice(this.activeIndex + 1, this.codeLength),
      ]

      // Only move back if it's backspace and not the first box
      if (e.key === 'Backspace' && this.activeIndex > 0) {
        this.activeIndex--
        this.focusActive()
      }
    } else if (/^\d$/.test(e.key)) {
      e.preventDefault()
      this.code = [
        ...this.code.slice(0, this.activeIndex),
        e.key,
        ...this.code.slice(this.activeIndex + 1, this.codeLength),
      ]

      if (this.activeIndex < this.codeLength - 1) {
        this.activeIndex++
        this.focusActive()
      }
    }
  }

  private handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    this.focusActive()
  }

  private handleSubmit = (e: any) => {
    console.log('form submitted')
    e.preventDefault()
    this.formSubmit.emit()
  }

  componentDidLoad() {
    this.focusActive()
  }

  render() {
    return (
      <Host onKeyDown={this.handleKeyDown}>
        <div class="otp">
          <vui-card-content>
            <form onSubmit={this.handleSubmit}>
              <vui-flex direction="row" halign="center" gap={2}>
                {Array.from({ length: this.codeLength }).map((_, index) => (
                  <div class="form-field">
                    <vui-textbox
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
            {/* <vui-flex direction="column" halign="center" gap={4}> */}
            <vui-button class="verify-button" onSubmit={this.handleSubmit}>
              Verify
            </vui-button>
            <vui-flex direction="row" halign="center" gap={1}>
              <vui-label>Didn't receive the code?</vui-label>
              <vui-link href="/resend-code">Resend</vui-link>
            </vui-flex>
            {/* </vui-flex> */}
          </vui-card-footer>
        </div>
      </Host>
    )
  }
}

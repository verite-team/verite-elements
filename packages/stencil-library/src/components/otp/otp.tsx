import { Component, Element, Event, EventEmitter, Host, State, h } from '@stencil/core'

import { getI18nStore } from '../../stores/i18n'

const t = getI18nStore().t

@Component({
  tag: 'vui-otp',
  styleUrl: 'otp.css',
  shadow: true,
})
export class Otp {
  @Element() el!: HTMLElement

  @State() code: string[] = []
  @State() activeIndex: number = 0

  @Event() formSubmit: EventEmitter<string>

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
    if (this.code.length === this.codeLength) {
      this.formSubmit.emit(this.code.join(''))
    }
  }

  async componentWillLoad() {
    await getI18nStore().waitUntilReady
  }

  componentDidLoad() {
    this.focusActive()
  }

  render() {
    return (
      <Host part="otp" onKeyDown={this.handleKeyDown}>
        <form onSubmit={this.handleSubmit}>
          <vui-flex direction="row" justify="center" gap={2}>
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
            {t('otp.verify')}
          </vui-button>
        </form>
      </Host>
    )
  }
}

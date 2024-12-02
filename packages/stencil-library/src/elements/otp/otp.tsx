import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { I18nProvider } from '../../components/i18n/i18n-provider'

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

  @Prop({ mutable: true }) submitLabel?: string = ''

  private readonly codeLength = 6

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      console.warn('No i18n provider found, using key as fallback')
      return key
    }
    return provider.getTranslation(key, params)
  }

  private focusActive() {
    setTimeout(() => {
      const activeTextbox = this.el.shadowRoot?.querySelector(`vui-textbox[name="code-${this.activeIndex}"]`)
      const input = activeTextbox?.shadowRoot?.querySelector('input')
      if (input) input.focus()
    }, 0)
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
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
                  focusable={index === this.activeIndex}
                  onMouseDown={this.handleMouseDown}
                  onClick={this.handleMouseDown}
                />
              </div>
            ))}
          </vui-flex>

          <vui-button class="verify-button" type="submit" onClick={this.handleSubmit}>
            {this.translate(this.submitLabel, { default: '$form.submit.label' })}
          </vui-button>
        </form>
      </Host>
    )
  }
}

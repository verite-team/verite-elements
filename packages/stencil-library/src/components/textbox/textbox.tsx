import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-textbox',
  styleUrl: 'textbox.css',
  shadow: true,
})
export class Textbox {
  // HTML input attributes
  @Prop() type: string = 'text'
  @Prop() placeholder?: string
  @Prop({ reflect: true }) disabled?: boolean
  @Prop({ reflect: true }) name?: string
  @Prop() autocomplete?: string
  @Prop() autocorrect?: 'on' | 'off'
  @Prop({ reflect: true }) required?: boolean
  @Prop() maxlength?: number
  @Prop({ reflect: true }) readonly?: boolean
  @Prop({ mutable: true, reflect: true }) value: string = ''
  @Prop() focusable?: boolean = true
  @Prop({ reflect: true }) invalid?: boolean

  // Events
  @Event() valueChange: EventEmitter<string>
  @Event() inputChange: EventEmitter<string>
  @Event() enterKey: EventEmitter<void>

  private handleInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.inputChange.emit(this.value)
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.enterKey.emit()
    }
  }

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.valueChange.emit(this.value)
  }

  render() {
    return (
      <input
        part="input"
        type={this.type}
        value={this.value}
        placeholder={this.placeholder}
        disabled={this.disabled}
        name={this.name}
        autocomplete={this.autocomplete}
        readonly={this.readonly}
        autocorrect={this.autocorrect}
        maxlength={this.maxlength}
        required={this.required}
        tabindex={this.focusable ? '0' : '-1'}
        onInput={this.handleInput}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}

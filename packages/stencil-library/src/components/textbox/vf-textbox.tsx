import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

@Component({
  tag: 'vf-textbox',
  styleUrl: 'vf-textbox.css',
  shadow: true,
  // formAssociated: true,
})
export class VfTextbox {
  // Define HTML input attributes we want to support
  @Prop() type: string = 'text'
  @Prop() placeholder?: string
  @Prop() disabled?: boolean
  @Prop({ reflect: true }) name?: string
  @Prop() autocomplete?: string
  // @Prop() autocapitalize?: string;
  @Prop() autocorrect?: 'on' | 'off'
  @Prop() required?: boolean
  @Prop() maxlength?: number
  @Prop({ reflect: true }) readonly?: boolean
  // Custom props
  @Prop({ mutable: true, reflect: true }) value: string = ''

  // @AttachInternals() internals: ElementInternals;

  // Events
  @Event() valueChange: EventEmitter<string>
  @Event() inputChange: EventEmitter<string>
  @Event() enterKey: EventEmitter<void>

  // componentWillLoad() {
  //   // Initialize the form value
  //   this.internals.setFormValue(this.value);
  // }

  private handleInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.inputChange.emit(this.value)
    // this.internals.setFormValue(this.value);
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
    // this.internals.setFormValue(this.value);
  }

  // formResetCallback() {
  //   this.value = '';
  //   // this.internals.setFormValue('');
  // }

  // formStateRestoreCallback(state: string) {
  //   this.value = state;
  //   // this.internals.setFormValue(state);
  // }

  render() {
    return (
      <input
        part="input"
        class="vf-textbox"
        type={this.type}
        value={this.value}
        placeholder={this.placeholder}
        disabled={this.disabled}
        name={this.name}
        autocomplete={this.autocomplete}
        readonly={this.readonly}
        // autocapitalize={this.autocapitalize}
        autocorrect={this.autocorrect}
        maxlength={this.maxlength}
        onInput={this.handleInput}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        required={this.required}
      />
    )
  }
}

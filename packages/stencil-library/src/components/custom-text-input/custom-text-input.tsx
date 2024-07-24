import { AttachInternals, Component, State, h } from '@stencil/core';

@Component({
  tag: 'custom-text-input',
  shadow: true,
  formAssociated: true
})
export class CustomTextInput {
  @State() value: string;

  @AttachInternals() internals: ElementInternals;

  handleChange(event) {
    this.value = event.target.value;
    this.internals.setFormValue(event.target.value);
  }

  componentWillLoad() {
    this.internals.setFormValue("a default value");
  }

  render() {
    return (
      <input
        type="text"
        value={this.value}
        onInput={(event) => this.handleChange(event)}
      />
    )
  }
}
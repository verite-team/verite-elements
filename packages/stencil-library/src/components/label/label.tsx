import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-label',
  styleUrl: 'label.css',
  shadow: true,
})
export class Label {
  @Prop() for?: string
  @Prop({ reflect: true }) required?: boolean = false

  render() {
    return (
      <label part="label root" htmlFor={this.for}>
        <slot></slot>
        {this.required && <span part="required">*</span>}
      </label>
    )
  }
}

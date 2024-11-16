import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-label',
  styleUrl: 'label.css',
  shadow: true,
})
export class Label {
  @Prop() for?: string
  @Prop() required?: boolean = false

  render() {
    return (
      <label part="label" class="vui-label" htmlFor={this.for}>
        <slot></slot>
        {this.required && <span class="vui-label-required">*</span>}
      </label>
    )
  }
}

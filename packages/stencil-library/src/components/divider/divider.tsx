import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-divider',
  styleUrl: 'divider.css',
  shadow: true,
})
export class Divider {
  @Prop({ reflect: true }) orientation?: 'horizontal' | 'vertical' = 'horizontal'

  render() {
    return (
      <Host part="divider" role="separator" aria-orientation={this.orientation}>
        <slot></slot>
      </Host>
    )
  }
}

import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-title',
  styleUrl: 'card-title.css',
  shadow: true,
})
export class CardTitle {
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md'
  @Prop({ reflect: true }) weight: 'bold' | 'medium' | 'light' = 'bold'
  @Prop({ reflect: true }) halign: 'left' | 'center' = 'left'

  render() {
    return (
      <Host part="card-title">
        <slot></slot>
      </Host>
    )
  }
}

import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-description',
  styleUrl: 'card-description.css',
  shadow: true,
})
export class CardDescription {
  @Prop({ reflect: true }) align: 'start' | 'center' | 'end' = 'center'

  render() {
    return (
      <Host>
        <p part="card-description">
          <slot></slot>
        </p>
      </Host>
    )
  }
}

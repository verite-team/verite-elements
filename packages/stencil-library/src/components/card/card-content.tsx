import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-card-content',
  styleUrl: 'card-content.css',
  shadow: true,
})
export class CardContent {
  render() {
    return (
      <Host part="card-content">
        <slot></slot>
      </Host>
    )
  }
}

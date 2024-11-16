import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-card-header',
  styleUrl: 'card-header.css',
  shadow: true,
})
export class CardHeader {
  render() {
    return (
      <Host part="card-header">
        <slot></slot>
      </Host>
    )
  }
}

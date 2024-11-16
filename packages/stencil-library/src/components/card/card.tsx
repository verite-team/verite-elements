import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  render() {
    return (
      <Host part="card">
        <slot></slot>
      </Host>
    )
  }
}

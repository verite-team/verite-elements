import { Component, h } from '@stencil/core'

@Component({
  tag: 'vui-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  render() {
    return (
      <div class="card" part="card">
        <slot></slot>
      </div>
    )
  }
}

import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  @Prop() elevation?: string

  render() {
    console.log('elevation', this.elevation)
    return (
      <Host part="card" style={{ 'box-shadow': `var(--elevation-${this.elevation})` }}>
        <slot></slot>
      </Host>
    )
  }
}

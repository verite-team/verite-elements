import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  @Prop({ reflect: true }) elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl'

  render() {
    return (
      <Host>
        <div part="card" style={{ 'box-shadow': `var(--elevation-${this.elevation})` }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}

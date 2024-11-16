import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-title',
  styleUrl: 'card-title.css',
  shadow: true,
})
export class CardTitle {
  @Prop() size: 'sm' | 'md' | 'lg' = 'md'
  @Prop() weight: 'bold' | 'medium' | 'light' = 'bold'
  @Prop() halign: 'left' | 'center' = 'left'

  render() {
    return (
      <h3
        class={{
          'card-title': true,
          [`card-title--${this.size}`]: true,
          [`card-title--${this.weight}`]: true,
          [`card-title--${this.halign}`]: true,
        }}
      >
        <slot></slot>
      </h3>
    )
  }
}

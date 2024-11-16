import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-description',
  styleUrl: 'card-description.css',
  shadow: true,
})
export class CardDescription {
  @Prop() halign: 'left' | 'center' = 'left'

  render() {
    return (
      <p
        class={{
          'card-description': true,
          [`card-description--${this.halign}`]: true,
        }}
      >
        <slot></slot>
      </p>
    )
  }
}

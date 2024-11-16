import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-footer',
  styleUrl: 'card-footer.css',
  shadow: true,
})
export class CardFooter {
  @Prop() variant: 'normal' | 'inset' = 'normal'

  render() {
    return (
      <div
        part="footer"
        class={{
          'card-footer': true,
          [`card-footer--${this.variant}`]: true,
        }}
      >
        <slot></slot>
      </div>
    )
  }
}

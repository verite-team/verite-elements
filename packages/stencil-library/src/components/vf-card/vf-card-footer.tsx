import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vf-card-footer',
  styleUrl: 'vf-card-footer.css',
  shadow: true,
})
export class VfCardFooter {
  @Prop() variant: 'normal' | 'inset' = 'normal'

  render() {
    return (
      <div
        part="footer"
        class={{
          'vf-card-footer': true,
          [`vf-card-footer--${this.variant}`]: true,
        }}
      >
        <slot></slot>
      </div>
    )
  }
}

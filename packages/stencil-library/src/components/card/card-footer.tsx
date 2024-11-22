import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-footer',
  styleUrl: 'card-footer.css',
  shadow: true,
})
export class CardFooter {
  @Prop({ reflect: true }) variant: 'default' | 'inset' = 'default'

  render() {
    return (
      <Host part="card-footer">
        <slot></slot>
      </Host>
    )
  }
}

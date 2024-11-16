import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-card-footer',
  styleUrl: 'card-footer.css',
  shadow: true,
})
export class CardFooter {
  @Prop({ reflect: true }) variant: 'normal' | 'inset' = 'normal'

  render() {
    return (
      <Host>
        <div part="card-footer">
          <slot></slot>
        </div>
      </Host>
    )
  }
}

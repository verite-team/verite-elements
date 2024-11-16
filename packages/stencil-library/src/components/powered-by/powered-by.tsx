import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-powered-by',
  styleUrl: 'powered-by.css',
  shadow: true,
})
export class PoweredBy {
  @Prop() label: string = 'Powered by Verite'

  render() {
    return (
      <Host part="powered-by" class="vui-powered-by">
        <span>{this.label}</span>
        <slot></slot>
      </Host>
    )
  }
}

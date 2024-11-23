import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-brand',
  styleUrl: 'brand.css',
  shadow: true,
})
export class PoweredBy {
  @Prop() label: string = ''
  @Prop() logo: string = ''

  render() {
    return (
      <Host part="brand">
        <span part="label">{this.label}</span>
        {this.logo && <img src={this.logo} alt={this.label} width="16" height="16" />}
      </Host>
    )
  }
}

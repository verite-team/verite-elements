import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-auth-header',
  styleUrl: 'auth-header.css',
  shadow: true,
})
export class AuthHeader {
  @Prop() heading: string
  @Prop() description: string
  @Prop() halign: 'left' | 'center' | 'right' = 'center'
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
  render() {
    return (
      <vui-card-header part="header">
        <vui-card-title size={this.size} halign={this.halign}>
          {this.heading}
        </vui-card-title>
        <vui-card-description halign={this.halign}>{this.description}</vui-card-description>
      </vui-card-header>
    )
  }
}

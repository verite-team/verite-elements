import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-auth-header',
  styleUrl: 'auth-header.css',
  shadow: true,
})
export class AuthHeader {
  @Prop() heading: string
  @Prop() description: string
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
  @Prop() align: 'start' | 'center' | 'end' = 'center'

  render() {
    return (
      <vui-card-header part="header">
        <vui-card-title size={this.size} align={this.align}>
          {this.heading}
        </vui-card-title>
        <vui-card-description align={this.align}>{this.description}</vui-card-description>
      </vui-card-header>
    )
  }
}

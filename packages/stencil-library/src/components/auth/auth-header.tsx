import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-auth-header',
  styleUrl: 'auth-header.css',
  shadow: true,
})
export class AuthHeader {
  @Prop() heading: string
  @Prop() description: string

  render() {
    return (
      <vui-card-header part="header">
        <div class="logo-container">
          <slot name="logo">
            <vui-placeholder width={40} height={41}></vui-placeholder>
          </slot>
        </div>
        <vui-card-title halign="center">{this.heading}</vui-card-title>
        <vui-card-description halign="center">{this.description}</vui-card-description>
      </vui-card-header>
    )
  }
}

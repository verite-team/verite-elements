import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-auth-card',
  styleUrl: 'auth-card.css',
  shadow: true,
})
export class AuthCard {
  @Prop() heading: string
  @Prop() description: string
  @Prop() prompt: string
  @Prop() action: string
  @Prop() variant?: 'default' | 'inset' = 'inset'
  @Prop() elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'none'

  render() {
    return (
      <vui-card elevation={this.elevation}>
        <slot name="header">
          <vui-auth-header heading={this.heading} description={this.description}></vui-auth-header>
        </slot>
        <vui-card-content>
          <slot name="providers"></slot>
          <slot></slot>
        </vui-card-content>
        <slot name="footer">
          <vui-auth-footer prompt={this.prompt} action={this.action} variant={this.variant}></vui-auth-footer>
        </slot>
      </vui-card>
    )
  }
}

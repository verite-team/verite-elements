import { Component, Prop, h } from '@stencil/core'

import { getI18n } from '../../utils/i18n'

const ti = getI18n().translateInterpolated

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
  @Prop() submitLabel: string
  @Prop() variant?: 'default' | 'inset' = 'inset'
  @Prop() elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'none'

  async componentWillLoad() {
    await getI18n().waitUntilReady()
  }

  render() {
    return (
      <vui-card elevation={this.elevation}>
        <slot name="header">
          <vui-auth-header heading={ti(this.heading)} description={ti(this.description)}></vui-auth-header>
        </slot>
        <vui-card-content>
          <slot name="providers"></slot>
          <slot></slot>
        </vui-card-content>
        <slot name="footer">
          <vui-auth-footer prompt={ti(this.prompt)} action={ti(this.action)} variant={this.variant}></vui-auth-footer>
        </slot>
      </vui-card>
    )
  }
}

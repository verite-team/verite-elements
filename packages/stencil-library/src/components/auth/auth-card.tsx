import { Component, Prop, h } from '@stencil/core'

import { getI18nStore } from '../../stores/i18n'

const tif = getI18nStore().tif

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

  async componentWillLoad() {
    await getI18nStore().waitUntilReady
  }

  render() {
    return (
      <vui-card elevation={this.elevation}>
        <slot name="header">
          <vui-auth-header heading={tif(this.heading)} description={tif(this.description)}></vui-auth-header>
        </slot>
        <vui-card-content>
          <slot name="providers"></slot>
          <slot></slot>
        </vui-card-content>
        <slot name="footer">
          <vui-auth-footer prompt={tif(this.prompt)} action={tif(this.action)} variant={this.variant}></vui-auth-footer>
        </slot>
      </vui-card>
    )
  }
}

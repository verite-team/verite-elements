import { Component, Element, Prop, h } from '@stencil/core'

import { I18nProvider } from '../i18n/i18n-provider'

@Component({
  tag: 'vui-auth-alt-card',
  styleUrl: 'auth-alt-card.css',
  shadow: true,
})
export class AuthAltCard {
  @Element() el!: HTMLElement

  @Prop() heading: string
  @Prop() description: string
  @Prop() prompt: string
  @Prop() action: string
  @Prop() submitLabel: string
  @Prop() variant?: 'default' | 'inset' = 'inset'
  @Prop() elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'none'

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      return key
    }
    return provider.getTranslation(key, params)
  }

  async componentWillLoad() {
    await I18nProvider.getClosestProvider(this.el)?.waitForTranslations()
  }

  render() {
    return (
      <vui-card elevation={this.elevation}>
        <slot name="logo"></slot>
        <slot name="header">
          <vui-auth-header
            class="header"
            heading={this.translate(this.heading)}
            description={this.translate(this.description)}
            size="xl"
            align="start"
          ></vui-auth-header>
        </slot>
        <slot name="providers"></slot>
        <slot></slot>
        <slot name="footer">
          <vui-auth-footer
            prompt={this.translate(this.prompt)}
            action={this.translate(this.action)}
            variant={this.variant}
          ></vui-auth-footer>
        </slot>
      </vui-card>
    )
  }
}

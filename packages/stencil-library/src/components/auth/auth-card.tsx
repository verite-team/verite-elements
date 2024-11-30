import { Component, Element, Prop, h } from '@stencil/core'

import { I18nProvider } from '../i18n/i18n-provider'

@Component({
  tag: 'vui-auth-card',
  styleUrl: 'auth-card.css',
  shadow: true,
})
export class AuthCard {
  @Element() el!: HTMLElement

  @Prop() heading: string
  @Prop() description: string
  @Prop() prompt: string
  @Prop() action: string
  @Prop() submitLabel: string
  @Prop() variant?: 'default' | 'inset' = 'inset'
  @Prop() elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'none'
  @Prop() brandLabel?: string
  @Prop() brandLogo?: string

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
            heading={this.translate(this.heading)}
            description={this.translate(this.description)}
          ></vui-auth-header>
        </slot>
        <vui-card-content>
          <slot name="providers"></slot>
          <slot></slot>
        </vui-card-content>
        <slot name="footer">
          <vui-auth-footer
            prompt={this.translate(this.prompt)}
            action={this.translate(this.action)}
            variant={this.variant}
            brand-label={this.brandLabel}
            brand-logo={this.brandLogo}
          ></vui-auth-footer>
        </slot>
      </vui-card>
    )
  }
}

import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core'

import { I18nProvider } from '../i18n/i18n-provider'

@Component({
  tag: 'vui-auth-footer',
  styleUrl: 'auth-footer.css',
  shadow: true,
})
export class AuthFooter {
  @Element() el!: HTMLElement

  @Prop() showDivider?: boolean = true
  @Prop() prompt?: string
  @Prop() action?: string
  @Prop() variant?: 'default' | 'inset' = 'default'
  @Prop() brandLabel?: string
  @Prop() brandLogo?: string
  @Prop() showBrand?: boolean = true

  @Event() actionClick: EventEmitter

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      return key
    }
    return provider.getTranslation(key, params)
  }

  handleActionClick = () => {
    this.actionClick.emit()
  }

  async componentWillLoad() {
    await I18nProvider.getClosestProvider(this.el)?.waitForTranslations()
  }

  render() {
    return (
      <vui-card-footer part="footer" variant={this.variant}>
        <div class="footer-content">
          <slot></slot>
        </div>
        {this.prompt && (
          <div class="prompt">
            <span>{this.translate(this.prompt)}</span>
            <vui-button variant="outline" size="sm" onClick={this.handleActionClick}>
              {this.translate(this.action)}
            </vui-button>
          </div>
        )}
        {this.showBrand && (
          <div>
            {this.showDivider && <vui-divider orientation="horizontal"></vui-divider>}
            <vui-brand
              class="brand"
              label={this.translate('$brand.label', { default: this.brandLabel })}
              logo={this.translate('$brand.logo', { default: this.brandLogo })}
            ></vui-brand>
          </div>
        )}
      </vui-card-footer>
    )
  }
}

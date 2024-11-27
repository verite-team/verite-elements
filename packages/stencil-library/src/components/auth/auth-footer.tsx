import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

import { getI18n } from '../../utils/i18n'

const t = getI18n().translate
@Component({
  tag: 'vui-auth-footer',
  styleUrl: 'auth-footer.css',
  shadow: true,
})
export class AuthFooter {
  @Prop() showDivider?: boolean = true
  @Prop() showBrand?: boolean = true
  @Prop() prompt?: string
  @Prop() action?: string
  @Prop() variant?: 'default' | 'inset' = 'default'

  @Event() actionClick: EventEmitter

  handleActionClick = () => {
    this.actionClick.emit()
  }

  async componentWillLoad() {
    await getI18n().waitUntilReady()
  }

  render() {
    return (
      <vui-card-footer part="footer" variant={this.variant}>
        <div class="footer-content">
          <slot></slot>
        </div>
        {this.prompt && (
          <div class="prompt">
            <span>{this.prompt}</span>
            <vui-button variant="outline" size="sm" onClick={this.handleActionClick}>
              {this.action}
            </vui-button>
          </div>
        )}
        {this.showDivider && <vui-divider orientation="horizontal"></vui-divider>}
        {this.showBrand && <vui-brand class="brand" label={t('brand.label')} logo={t('brand.logo')}></vui-brand>}
      </vui-card-footer>
    )
  }
}

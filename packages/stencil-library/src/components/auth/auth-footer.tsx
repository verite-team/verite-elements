import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

import { i18n } from '../../stores/i18n'

const t = i18n.t
@Component({
  tag: 'vui-auth-footer',
  styleUrl: 'auth-footer.css',
  shadow: true,
})
export class AuthFooter {
  @Prop() showDivider?: boolean = true
  @Prop() showPoweredBy?: boolean = true
  @Prop() prompt?: string
  @Prop() action?: string
  @Prop() variant?: 'default' | 'inset' = 'default'

  @Event() actionClick: EventEmitter

  handleActionClick = () => {
    this.actionClick.emit()
  }

  async componentWillLoad() {
    await i18n.waitUntilReady
  }

  render() {
    return (
      <vui-card-footer part="footer" variant={this.variant}>
        {this.prompt && (
          <div class="prompt">
            <span>{this.prompt}</span>
            <vui-button variant="outline" size="sm" onClick={this.handleActionClick}>
              {this.action}
            </vui-button>
          </div>
        )}
        {this.showDivider && <vui-divider orientation="horizontal"></vui-divider>}
        {this.showPoweredBy && <vui-powered-by label={t('poweredBy')} class="powered-by"></vui-powered-by>}
      </vui-card-footer>
    )
  }
}

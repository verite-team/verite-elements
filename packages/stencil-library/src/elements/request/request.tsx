import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { I18nProvider } from '../../components/i18n/i18n-provider'
import { toJSON } from '../../utils/toJSON'

@Component({
  tag: 'vui-request',
  styleUrl: 'request.css',
  shadow: true,
})
export class Request {
  @Element() el!: HTMLElement

  @Prop({ mutable: true, reflect: true }) permissions?: string[] | string = []
  @Prop({ reflect: true }) application?: string
  @Prop({ reflect: true }) redirectUri?: string
  @Prop({ reflect: true }) isLoading?: boolean
  @Prop() showRedirect?: boolean = true

  @State() permissionsList: string[] = []

  @Event() requestApprove: EventEmitter<void>
  @Event() requestDeny: EventEmitter<void>

  private translate(key: string, params?: Record<string, string>): string {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      console.warn('No i18n provider found, using key as fallback')
      return key
    }
    return provider.getTranslation(`$${key}`, params)
  }

  private handleApprove = (e: Event) => {
    e.preventDefault()
    this.requestApprove.emit()
  }

  private handleDeny = (e: Event) => {
    e.preventDefault()
    this.requestDeny.emit()
  }

  componentWillLoad() {
    if (typeof this.permissions === 'string') {
      this.permissionsList = toJSON<string[]>(this.permissions, []).map(p => p.trim())
    } else {
      this.permissionsList = this.permissions
    }
  }

  render() {
    return (
      <Host>
        <slot name="logo"></slot>
        <slot name="header">
          <vui-auth-header heading={this.application} size="lg" align="center"></vui-auth-header>
        </slot>
        <div class="request-container">
          <div class="permissions-section">
            <div class="section-title">{this.translate('request.permissions.title')}</div>
            <ul class="permissions-list">
              {this.permissionsList.map(permission => (
                <li class="permission-item">{permission}</li>
              ))}
            </ul>
          </div>

          {this.redirectUri && (
            <div class="redirect-section">
              <div class="section-title">{this.translate('request.redirect.title')}</div>
              {this.showRedirect && <div class="redirect-uri">{this.redirectUri}</div>}
            </div>
          )}

          <div class="actions">
            <vui-button
              name="deny"
              variant="soft"
              class="deny-button"
              onClick={this.handleDeny}
              busy={this.isLoading}
              disabled={this.isLoading}
            >
              {this.translate('request.deny.label')}
            </vui-button>

            <vui-button
              name="approve"
              variant="default"
              class="approve-button"
              onClick={this.handleApprove}
              busy={this.isLoading}
              disabled={this.isLoading}
            >
              {this.translate('request.approve.label')}
            </vui-button>
          </div>
        </div>
      </Host>
    )
  }
}

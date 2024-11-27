import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { getI18n } from '../../utils/i18n'
import { toJSON } from '../../utils/toJSON'

const t = getI18n().translate

@Component({
  tag: 'vui-request',
  styleUrl: 'request.css',
  shadow: true,
})
export class Request {
  @Prop({ mutable: true, reflect: true }) permissions?: string[] | string = []
  @Prop({ reflect: true }) application?: string
  @Prop({ reflect: true }) redirectUri?: string
  @Prop({ reflect: true }) isLoading?: boolean
  @Prop() showRedirect?: boolean = true

  @State() permissionsList: string[] = []

  @Event() requestApprove: EventEmitter<void>
  @Event() requestDeny: EventEmitter<void>

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
    console.log('permissionsList', this.permissionsList)
  }

  render() {
    return (
      <Host>
        <slot name="logo"></slot>
        <slot name="header">
          <vui-auth-header heading={this.application} size="lg"></vui-auth-header>
        </slot>
        <div class="request-container">
          <div class="permissions-section">
            <div class="section-title">{t('request.permissions.title')}</div>
            <ul class="permissions-list">
              {this.permissionsList.map(permission => (
                <li class="permission-item">{permission}</li>
              ))}
            </ul>
          </div>

          {this.redirectUri && (
            <div class="redirect-section">
              <div class="section-title">{t('request.redirect.title')}</div>
              {this.showRedirect && <div class="redirect-uri">{this.redirectUri}</div>}
            </div>
          )}

          <div class="actions">
            <vui-button
              variant="soft"
              class="deny-button"
              onClick={this.handleDeny}
              busy={this.isLoading}
              disabled={this.isLoading}
            >
              {t('request.deny.label')}
            </vui-button>

            <vui-button
              variant="default"
              class="approve-button"
              onClick={this.handleApprove}
              busy={this.isLoading}
              disabled={this.isLoading}
            >
              {t('request.approve.label')}
            </vui-button>
          </div>
        </div>
      </Host>
    )
  }
}

import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'roc-badge',
  styleUrl: 'roc-badge.css',
  shadow: true,
})
export class RocBadge {
  @Prop() type: 'info' | 'warning' | 'danger' | 'success' = 'info'

  render() {
    return (
      <Host>
        <span class={`badge ${this.type ? 'badge-' + this.type : ''}`}>
          <slot></slot>
        </span>
      </Host>
    )
  }
}

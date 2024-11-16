import { Component, h } from '@stencil/core'

@Component({
  tag: 'vui-card-header',
  styleUrl: 'card-header.css',
  shadow: true,
})
export class CardHeader {
  render() {
    return (
      <div class="card-header">
        <slot></slot>
      </div>
    )
  }
}

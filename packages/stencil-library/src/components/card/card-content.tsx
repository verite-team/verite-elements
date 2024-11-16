import { Component, h } from '@stencil/core'

@Component({
  tag: 'vui-card-content',
  styleUrl: 'card-content.css',
  shadow: true,
})
export class CardContent {
  render() {
    return (
      <p part="content" class="card-content">
        <slot></slot>
      </p>
    )
  }
}

import { Component, h } from '@stencil/core'

@Component({
  tag: 'vf-card-content',
  styleUrl: 'vf-card-content.css',
  shadow: true,
})
export class VfCardContent {
  render() {
    return (
      <p
        part="content"
        class={{
          'vf-card-content': true,
        }}
      >
        <slot></slot>
      </p>
    )
  }
}

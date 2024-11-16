import { Component, h } from '@stencil/core';

@Component({
  tag: 'vf-card-header',
  styleUrl: 'vf-card-header.css',
  shadow: true,
})
export class VfCardHeader {
  render() {
    return (
      <div class="vf-card-header">
        <slot></slot>
      </div>
    );
  }
}

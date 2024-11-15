import { Component, h } from '@stencil/core';

@Component({
  tag: 'vf-card',
  styleUrl: 'vf-card.css',
  shadow: true,
})
export class VfCard {
  render() {
    return (
      <div class="vf-card" part="card">
        <slot></slot>
      </div>
    );
  }
}

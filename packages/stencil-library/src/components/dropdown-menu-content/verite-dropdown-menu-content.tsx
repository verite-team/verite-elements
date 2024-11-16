import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'verite-dropdown-menu-content',
  styleUrl: 'verite-dropdown-menu-content.css',
  shadow: true,
})
export class VeriteDropdownMenuContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

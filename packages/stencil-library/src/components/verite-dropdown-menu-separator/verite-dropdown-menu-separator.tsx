import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'verite-dropdown-menu-separator',
  styleUrl: 'verite-dropdown-menu-separator.css',
  shadow: true,
})
export class VeriteDropdownMenuSeparator {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

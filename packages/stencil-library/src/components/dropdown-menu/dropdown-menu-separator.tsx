import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-dropdown-menu-separator',
  styleUrl: 'dropdown-menu-separator.css',
  shadow: true,
})
export class DropdownMenuSeparator {
  render() {
    return (
      <Host part="dropdown-menu-separator">
        <slot></slot>
      </Host>
    )
  }
}

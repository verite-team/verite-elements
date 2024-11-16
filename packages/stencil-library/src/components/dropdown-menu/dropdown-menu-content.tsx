import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-dropdown-menu-content',
  styleUrl: 'dropdown-menu-content.css',
  shadow: true,
})
export class DropdownMenuContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}

import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-dropdown-menu-trigger',
  styleUrl: 'dropdown-menu-trigger.css',
  shadow: true,
})
export class DropdownMenuTrigger {
  render() {
    return (
      <Host part="dropdown-menu-trigger">
        <slot></slot>
      </Host>
    )
  }
}

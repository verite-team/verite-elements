import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'verite-dropdown-menu-trigger',
  styleUrl: 'verite-dropdown-menu-trigger.css',
  shadow: true,
})
export class VeriteDropdownMenuTrigger {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}

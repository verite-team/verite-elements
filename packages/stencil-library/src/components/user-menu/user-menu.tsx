import { Component, h } from '@stencil/core'

@Component({
  tag: 'vui-user-menu',
  styleUrl: 'user-menu.css',
  shadow: true,
})
export class UserMenu {
  render() {
    return (
      <vui-dropdown-menu>
        <vui-dropdown-menu-trigger slot="trigger">
          <vui-button variant="ghost" size="icon" aria-label="User menu">
            <vui-icon name="solar:user-bold-duotone" size="md"></vui-icon>
          </vui-button>
        </vui-dropdown-menu-trigger>

        <vui-dropdown-menu-item>
          <vui-icon name="ic:outline-face" size="sm"></vui-icon>
          <span>Profile</span>
        </vui-dropdown-menu-item>

        <vui-dropdown-menu-item>
          <vui-icon name="ic:outline-settings" size="sm"></vui-icon>
          <span>Settings</span>
        </vui-dropdown-menu-item>

        <vui-dropdown-menu-separator></vui-dropdown-menu-separator>

        <vui-dropdown-menu-item>
          <vui-icon name="ic:outline-logout" size="sm"></vui-icon>
          <span>Logout</span>
        </vui-dropdown-menu-item>
      </vui-dropdown-menu>
    )
  }
}

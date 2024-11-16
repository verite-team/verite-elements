import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'vui-user-menu',
  styleUrl: 'user-menu.css',
  shadow: true,
})
export class UserMenu {
  render() {
    return (
      <Host>
        <vui-dropdown-menu>
          <vui-dropdown-menu-trigger slot="trigger">
            <vui-button variant="ghost">
              <vui-icon name="face"></vui-icon>
            </vui-button>
          </vui-dropdown-menu-trigger>

          <vui-dropdown-menu-item>
            <vui-icon name="face" size="sm"></vui-icon>
            <span>Profile</span>
          </vui-dropdown-menu-item>

          <vui-dropdown-menu-item>
            <vui-icon name="settings" size="sm"></vui-icon>
            <span>Settings</span>
          </vui-dropdown-menu-item>

          <vui-dropdown-menu-separator></vui-dropdown-menu-separator>

          <vui-dropdown-menu-item>
            <vui-icon name="logout" size="sm"></vui-icon>
            <span>Logout</span>
          </vui-dropdown-menu-item>
        </vui-dropdown-menu>
      </Host>
    )
  }
}

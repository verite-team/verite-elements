import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'verite-user-menu',
  styleUrl: 'verite-user-menu.css',
  shadow: true,
})
export class VeriteUserMenu {
  render() {
    return (
      <Host>
        <verite-dropdown-menu>
          <verite-dropdown-menu-trigger slot="trigger">
            <vf-button variant="ghost">
              <vf-icon name="face"></vf-icon>
            </vf-button>
          </verite-dropdown-menu-trigger>

          <verite-dropdown-menu-item>
            <vf-icon name="face" size="sm"></vf-icon>
            <span>Profile</span>
          </verite-dropdown-menu-item>

          <verite-dropdown-menu-item>
            <vf-icon name="settings" size="sm"></vf-icon>
            <span>Settings</span>
          </verite-dropdown-menu-item>

          <verite-dropdown-menu-separator></verite-dropdown-menu-separator>

          <verite-dropdown-menu-item>
            <vf-icon name="logout" size="sm"></vf-icon>
            <span>Logout</span>
          </verite-dropdown-menu-item>
        </verite-dropdown-menu>
      </Host>
    )
  }
}

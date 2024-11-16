import { Component, Event, EventEmitter, h } from '@stencil/core'

import { MenuAction } from './user-menu-interfaces'

@Component({
  tag: 'vui-user-menu',
  styleUrl: 'user-menu.css',
  shadow: true,
})
export class UserMenu {
  @Event() menuAction: EventEmitter<MenuAction>

  private handleMenuAction = (action: MenuAction) => () => {
    this.menuAction.emit(action)
  }

  render() {
    return (
      <vui-dropdown-menu part="menu">
        <vui-dropdown-menu-trigger slot="trigger" part="trigger">
          <vui-button variant="ghost" size="icon" aria-label="User menu" part="button">
            <vui-icon name="solar:user-bold-duotone" size="md" part="user-icon" />
          </vui-button>
        </vui-dropdown-menu-trigger>

        <vui-dropdown-menu-item part="menu-item" onClick={this.handleMenuAction('profile')}>
          <vui-icon name="ic:outline-face" size="sm" part="item-icon" />
          <span part="item-text">Profile</span>
        </vui-dropdown-menu-item>

        <vui-dropdown-menu-item part="menu-item" onClick={this.handleMenuAction('settings')}>
          <vui-icon name="ic:outline-settings" size="sm" part="item-icon" />
          <span part="item-text">Settings</span>
        </vui-dropdown-menu-item>

        <vui-dropdown-menu-separator part="separator" />

        <vui-dropdown-menu-item part="menu-item" onClick={this.handleMenuAction('logout')}>
          <vui-icon name="ic:outline-logout" size="sm" part="item-icon" />
          <span part="item-text">Logout</span>
        </vui-dropdown-menu-item>
      </vui-dropdown-menu>
    )
  }
}

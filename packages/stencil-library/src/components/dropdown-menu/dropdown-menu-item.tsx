import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-dropdown-menu-item',
  styleUrl: 'dropdown-menu-item.css',
  shadow: true,
})
export class DropdownMenuItem {
  @Prop() disabled?: boolean = false
  @Event() itemClick: EventEmitter<void>

  private handleClick = (e: MouseEvent) => {
    if (!this.disabled) {
      e.preventDefault()
      e.stopPropagation()
      this.itemClick.emit()
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      this.itemClick.emit()
    }
  }

  render() {
    return (
      <Host
        part="dropdown-menu-item"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        role="menuitem"
        tabindex="0"
        aria-disabled={this.disabled}
      >
        <slot></slot>
      </Host>
    )
  }
}

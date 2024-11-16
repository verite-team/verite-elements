import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'verite-dropdown-menu-item',
  styleUrl: 'verite-dropdown-menu-item.css',
  shadow: true,
})
export class VeriteDropdownMenuItem {
  @Prop() disabled?: boolean = false
  @Event() itemClick: EventEmitter<void>

  componentDidLoad() {
    console.log('Menu item loaded')
  }

  private handleClick = (e: MouseEvent) => {
    console.log('Menu item clicked')
    if (!this.disabled) {
      this.itemClick.emit()
    }
  }

  render() {
    return (
      <Host onClick={this.handleClick} role="menuitem" tabindex="0" aria-disabled={this.disabled}>
        <slot></slot>
      </Host>
    )
  }
}

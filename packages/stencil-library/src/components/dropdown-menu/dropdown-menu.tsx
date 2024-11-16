import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'vui-dropdown-menu',
  styleUrl: 'dropdown-menu.css',
  shadow: true,
})
export class DropdownMenu {
  @Element() el!: HTMLElement
  @State() isOpen = false
  @Prop({ reflect: true }) position: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' = 'bottom-end'

  @Listen('click', { target: 'window' })
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const isInside =
      this.el.contains(target) || target.closest('vui-user-menu') || target.closest('vui-dropdown-menu-item')

    if (!isInside && this.isOpen) {
      this.isOpen = false
    }
  }

  private handleTriggerClick = (event: MouseEvent) => {
    event.stopPropagation()
    this.isOpen = !this.isOpen
  }

  render() {
    return (
      <Host part="dropdown-menu">
        <div class="anchor" onClick={this.handleTriggerClick}>
          <slot name="trigger"></slot>
        </div>
        {this.isOpen && (
          <div class="content" data-position={this.position} onClick={e => e.stopPropagation()}>
            <vui-dropdown-menu-content>
              <slot></slot>
            </vui-dropdown-menu-content>
          </div>
        )}
      </Host>
    )
  }
}

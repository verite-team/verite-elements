import { Component, Element, Host, Listen, State, h } from '@stencil/core'

@Component({
  tag: 'verite-dropdown-menu',
  styleUrl: 'verite-dropdown-menu.css',
  shadow: true,
})
export class VeriteDropdownMenu {
  @Element() el!: HTMLElement

  @State() isOpen = false

  componentDidLoad() {
    console.log('Dropdown menu loaded')
  }

  @Listen('click', { target: 'window' })
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const isInside =
      this.el.contains(target) || target.closest('verite-user-menu') || target.closest('verite-dropdown-menu-item')

    console.log('Click event:', {
      target,
      isInside,
      currentState: this.isOpen,
    })

    if (!isInside && this.isOpen) {
      this.isOpen = false
    }
  }

  private handleTriggerClick = (event: MouseEvent) => {
    event.stopPropagation()
    this.isOpen = !this.isOpen
    console.log('Trigger clicked, isOpen:', this.isOpen)
  }

  render() {
    console.log('Rendering dropdown, isOpen:', this.isOpen)

    return (
      <Host>
        <div onClick={this.handleTriggerClick}>
          <slot name="trigger"></slot>
        </div>
        {this.isOpen && (
          <div class="content" onClick={e => e.stopPropagation()}>
            <verite-dropdown-menu-content>
              <slot></slot>
            </verite-dropdown-menu-content>
          </div>
        )}
      </Host>
    )
  }
}

import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'verite-dropdown-menu',
  styleUrl: 'verite-dropdown-menu.css',
  shadow: true,
})
export class VeriteDropdownMenu {
  @Element() el!: HTMLElement
  @State() isOpen = false
  @Prop() position: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' = 'bottom-end'

  @Listen('click', { target: 'window' })
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const isInside =
      this.el.contains(target) || target.closest('verite-user-menu') || target.closest('verite-dropdown-menu-item')

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
      <Host>
        <div class="anchor" onClick={this.handleTriggerClick}>
          <slot name="trigger"></slot>
        </div>
        {this.isOpen && (
          <div class={`content ${this.position}`} onClick={e => e.stopPropagation()}>
            <verite-dropdown-menu-content>
              <slot></slot>
            </verite-dropdown-menu-content>
          </div>
        )}
      </Host>
    )
  }
}

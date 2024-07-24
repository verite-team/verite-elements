import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'todo-list-item',
  styleUrl: 'todo-list-item.css',
  shadow: true,
})
export class TodoListItem {
  @Prop() checked: boolean = false

  @Event() checkedChange: EventEmitter<boolean>

  handleCheckedChange(event) {
    // this.checked = event.target.checked
    this.checkedChange.emit(event.target.checked)
    // console.log('checked:', event.target.checked)
  }

  render() {
    return (
      <Host>
        <li>
          <label>
            <input type="checkbox" checked={this.checked} onChange={this.handleCheckedChange.bind(this)} />
            <slot />
          </label>
        </li>
      </Host>
    )
  }
}

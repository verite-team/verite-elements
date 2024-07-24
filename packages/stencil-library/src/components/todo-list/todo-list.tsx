import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core'

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  @Prop() todos: string[] = []

  // @State() parsedTodos: string[] = []

  @State() checkedItems: string[] = []

  @Event() ready: EventEmitter

  @Watch('todos')
  watchTodosHandler(newTodos: string[]) {
    console.log('🍉 TODO LIST has been updated', newTodos)
    // try {
    //   this.parsedTodos = JSON.parse(newTodos)
    // } catch (e) {
    //   console.error('Failed to parse todos', e)
    // }
  }

  connectedCallback() {
    // console.log('TODO LIST has been rendered', this.todos)
    try {
      // this.parsedTodos = JSON.parse(this.todos);
      console.log('TODO LIST has been rendered', this.todos)
    } catch (e) {
      console.error('Failed to parse todos', e)
    }

    this.ready.emit()
  }

  handleCheckedChange(index: number, checked: boolean) {
    // console.log('TODO LIST ITEM has been checked', event)
    if (checked) {
      this.checkedItems = [...this.checkedItems, this.todos[index]]
    } else {
      this.checkedItems = this.checkedItems.filter(item => item !== this.todos[index])
    }
    // console.log('checkedItems:', this.#checkedItems)
    // forceUpdate(this)
  }

  render() {
    return (
      <div class="list">
        <div class="title">TODOS:</div>
        <ul>
          {this.todos.map((todo, index) => (
            <todo-list-item onCheckedChange={evt => this.handleCheckedChange(index, evt.detail)}>{todo}</todo-list-item>
          ))}
        </ul>
        <div>{JSON.stringify(this.checkedItems)}</div>
      </div>
    )
  }
}

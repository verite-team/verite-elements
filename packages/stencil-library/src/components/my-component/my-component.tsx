import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

import { format } from '../../utils/utils'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string

  /**
   * The middle name
   */
  @Prop() middle: string

  /**
   * The last name
   */
  @Prop() last: string


  @Event() clicked: EventEmitter<void>

  private getText(): string {
    return format(this.first, this.middle, this.last)
  }

  handleClick() {
    this.clicked.emit()
  }

  // connectedCallback() {
  //   console.log('Component has been rendered')
  // }

  render() {
    return <div onClick={() => this.handleClick()}>Hello, world! I'm {this.getText()}</div>
  }
}

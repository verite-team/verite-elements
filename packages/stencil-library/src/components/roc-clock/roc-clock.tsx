import { Component, Event, EventEmitter, Host, Listen, State, h } from '@stencil/core'

@Component({
  tag: 'roc-clock',
  styleUrl: 'roc-clock.css',
  shadow: true,
})
export class RocClock {
  timer: number

  @State() currentTime: number = Date.now()
  @State() isOpen: boolean = false

  @Listen('click', { capture: false })
  handleClick(ev: Event) {
    console.log('click!', ev.target)
    this.isOpen = !this.isOpen
  }

  @Event() timeChange: EventEmitter<number>

  updateTime() {
    this.currentTime = Date.now()
  }

  formatTime() {
    return new Date(this.currentTime).toLocaleTimeString()
  }

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.updateTime()
      this.timeChange.emit(this.currentTime)
    }, 1000)
  }

  disconnectedCallback() {
    window.clearInterval(this.timer)
  }

  render() {
    return (
      <Host>
        <div class={'clock'} onClick={this.handleClick}>
          <span>Current time: {this.formatTime()}</span>
          <div>{this.isOpen ? 'Yes' : 'No'}</div>
          <slot name='clock'></slot>
        </div>
      </Host>
    )
  }
}

import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-spinner',
  styleUrl: 'spinner.css',
  shadow: true,
})
export class Spinner {
  @Prop() size: 'small' | 'medium' | 'large' = 'medium'
  @Prop() color: string = 'currentColor'

  render() {
    return (
      <div class={`spinner ${this.size}`} aria-label="Loading">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style={{ color: this.color }}>
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" />
        </svg>
      </div>
    )
  }
}

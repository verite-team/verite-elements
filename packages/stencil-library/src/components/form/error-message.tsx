import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-error-message',
  styleUrl: 'error-message.css',
  shadow: true,
})
export class ErrorMessage {
  /** The error message to display */
  @Prop() message: string = ''

  /** Whether to show the error icon */
  @Prop() showIcon: boolean = false

  render() {
    if (!this.message.trim()) return null

    return (
      <div class="error-container" role="alert" aria-live="polite">
        {this.showIcon && <vui-icon name="ic:round-error-outline" size="sm" class="error-icon" aria-hidden="true" />}
        <span class="error-text">{this.message}</span>
      </div>
    )
  }
}

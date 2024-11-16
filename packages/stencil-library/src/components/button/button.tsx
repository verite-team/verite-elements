import { AttachInternals, Component, Event, EventEmitter, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-button',
  styleUrl: 'button.css',
  shadow: true,
  formAssociated: true,
})
export class Button {
  @Prop({ reflect: true }) variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' = 'default'
  @Prop({ reflect: true }) size?: 'default' | 'sm' | 'lg' | 'icon' = 'default'
  @Prop({ reflect: true }) width?: 'full' | 'auto' = 'auto'
  @Prop({ reflect: true }) busy?: boolean = false
  @Prop({ reflect: true }) disabled?: boolean = false

  // Essential button props
  @Prop() type: 'button' | 'submit' | 'reset' = 'button'
  @Prop() name?: string
  @Prop() value?: string
  @Prop() form?: string

  @AttachInternals() internals: ElementInternals

  // Events
  @Event() buttonClick: EventEmitter<MouseEvent>

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled && !this.busy) {
      this.buttonClick.emit(event)
      if (this.type === 'submit') {
        // perform form submission
        this.internals.form?.requestSubmit()
      }
    }
  }

  render() {
    return (
      <button
        part="button"
        type={this.type}
        disabled={this.disabled || this.busy}
        name={this.name}
        value={this.value}
        form={this.form}
        aria-busy={this.busy}
        onClick={this.handleClick}
      >
        {this.busy ? (
          <div class="spinner">
            <div class="spinner-inner"></div>
          </div>
        ) : null}
        <div class="content">
          <slot></slot>
        </div>
      </button>
    )
  }
}

import { AttachInternals, Component, Event, EventEmitter, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-button',
  styleUrl: 'button.css',
  shadow: true,
  formAssociated: true,
})
export class Button {
  @Prop({ reflect: true }) variant?: 'default' | 'soft' | 'outline' | 'ghost' | 'destructive' = 'default'
  @Prop({ reflect: true }) size?: 'default' | 'sm' | 'lg' | 'icon' = 'default'
  @Prop({ reflect: true }) width?: 'full' | 'auto' = 'auto'
  @Prop({ reflect: true }) disabled?: boolean = false
  @Prop({ reflect: true }) busy?: boolean = false

  // Essential button props
  @Prop() type: 'button' | 'submit' | 'reset' = 'button'
  @Prop() name?: string
  @Prop() value?: string
  @Prop() form?: string

  @AttachInternals() internals: ElementInternals

  // Events
  @Event() buttonClick: EventEmitter<MouseEvent>

  private handleClick = (event: MouseEvent) => {
    if (!this.busy) {
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
        name={this.name}
        value={this.value}
        form={this.form}
        aria-busy={this.busy}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        {this.busy ? (
          <vui-spinner size="small" />
        ) : (
          <div class="content">
            <slot></slot>
          </div>
        )}
      </button>
    )
  }
}

import { AttachInternals, Component, Event, EventEmitter, Prop, h } from '@stencil/core'

import { clsx } from '../../utils/clsx'

@Component({
  tag: 'vf-button',
  styleUrl: 'vf-button.css',
  // scoped: true,
  shadow: true,
  formAssociated: true,
})
export class VfButton {
  // Styling props
  @Prop() variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' = 'default'
  @Prop() size?: 'default' | 'sm' | 'lg' | 'icon' = 'default'

  // Essential button props
  @Prop() type: 'button' | 'submit' | 'reset' = 'button'
  @Prop() disabled?: boolean = false
  @Prop() busy?: boolean = false
  @Prop() name?: string
  @Prop() value?: string
  @Prop() form?: string
  @Prop() width?: 'full' | 'auto' = 'auto'

  @AttachInternals() internals: ElementInternals

  // // Accessibility props
  // @Prop() ariaLabel?: string;
  // @Prop() ariaExpanded?: boolean;
  // @Prop() ariaControls?: string;
  // @Prop() ariaPressed?: boolean;

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
    const classes = {
      'vf-button': true,
      [`vf-button--${this.variant}`]: this.variant !== 'default',
      [`vf-button--${this.size}`]: this.size !== 'default',
      'vf-button--busy': this.busy,
      'vf-button--disabled': this.disabled,
    }

    return (
      <button
        part="button"
        class={clsx(classes)}
        type={this.type}
        disabled={this.disabled || this.busy}
        name={this.name}
        value={this.value}
        form={this.form}
        // aria-label={this.ariaLabel}
        // aria-expanded={this.ariaExpanded}
        // aria-controls={this.ariaControls}
        // aria-pressed={this.ariaPressed}
        aria-busy={this.busy}
        onClick={this.handleClick}
      >
        {this.busy ? (
          <div class="vf-button__spinner">
            <div class="vf-button__spinner-inner"></div>
          </div>
        ) : null}
        <div
          class={{
            'vf-button__content': true,
            'vf-button__content--busy': this.busy,
          }}
        >
          <slot></slot>
        </div>
      </button>
    )
  }
}

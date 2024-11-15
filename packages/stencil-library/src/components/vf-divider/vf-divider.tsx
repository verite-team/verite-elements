import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-divider',
  styleUrl: 'vf-divider.css',
  shadow: true,
})
export class VfDivider {
  @Prop() orientation?: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return (
      <div
        class={{
          divider: true,
          [`divider--${this.orientation}`]: true,
        }}
        role="separator"
        aria-orientation={this.orientation}
      >
        <slot></slot>
      </div>
    );
  }
}

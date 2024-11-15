import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-card-description',
  styleUrl: 'vf-card-description.css',
  shadow: true,
})
export class VfCardDescription {
  @Prop() align: 'left' | 'center' = 'left';

  render() {
    return (
      <p
        class={{
          'vf-card-description': true,
          [`vf-card-description--${this.align}`]: true,
        }}
      >
        <slot></slot>
      </p>
    );
  }
}

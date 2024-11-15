import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-card-title',
  styleUrl: 'vf-card-title.css',
  shadow: true,
})
export class VfCardTitle {
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() weight: 'bold' | 'medium' | 'light' = 'bold';
  @Prop() align: 'left' | 'center' = 'left';

  render() {
    return (
      <h3
        class={{
          'vf-card-title': true,
          [`vf-card-title--${this.size}`]: true,
          [`vf-card-title--${this.weight}`]: true,
          [`vf-card-title--${this.align}`]: true,
        }}
      >
        <slot></slot>
      </h3>
    );
  }
}

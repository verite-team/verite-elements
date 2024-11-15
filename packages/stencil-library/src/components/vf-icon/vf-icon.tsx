import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-icon',
  styleUrl: 'vf-icon.css',
  shadow: true,
})
export class VfIcon {
  @Prop() name!: string;
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';
  @Prop() color?: string;

  render() {
    return (
      <span
        class={{
          'material-icons': true,
          'vf-icon': true,
          [`vf-icon--${this.size}`]: true,
        }}
        style={{ color: this.color }}
      >
        {this.name}
      </span>
    );
  }
}

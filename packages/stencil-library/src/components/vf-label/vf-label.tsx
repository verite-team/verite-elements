import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-label',
  styleUrl: 'vf-label.css',
  shadow: true,
})
export class VfLabel {
  @Prop() for?: string;
  @Prop() required?: boolean = false;

  render() {
    return (
      <label class="vf-label" htmlFor={this.for}>
        <slot></slot>
        {this.required && <span class="vf-label-required">*</span>}
      </label>
    );
  }
}

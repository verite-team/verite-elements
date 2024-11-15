import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-powered-by',
  styleUrl: 'vf-powered-by.css',
  shadow: true,
})
export class VfPoweredBy {
  @Prop() label: string = 'Powered by Verite';

  render() {
    return (
      <Host>
        <div class="vf-powered-by">
          <span>{this.label}</span>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

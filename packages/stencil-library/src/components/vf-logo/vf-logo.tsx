import { Component, Host, Prop, h } from '@stencil/core';

import { Icons } from '../../icons/Icons';

@Component({
  tag: 'vf-logo',
  styleUrl: 'vf-logo.css',
  shadow: true,
})
export class VfLogo {
  @Prop() name: 'twitter' | 'gitHub' | 'google' | 'apple' | 'paypal';
  @Prop() size: number = 20;

  render() {
    return <Host>{Icons[this.name]({ width: this.size, height: this.size })}</Host>;
  }
}

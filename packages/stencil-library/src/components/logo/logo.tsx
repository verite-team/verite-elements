import { Component, Host, Prop, h } from '@stencil/core'

import { Icons } from '../../icons/Icons'

@Component({
  tag: 'vui-logo',
  styleUrl: 'logo.css',
  shadow: true,
})
export class Logo {
  @Prop() name: 'twitter' | 'gitHub' | 'google' | 'apple' | 'paypal'
  @Prop() size: number = 20

  render() {
    return <Host part="logo">{Icons[this.name]({ width: this.size, height: this.size })}</Host>
  }
}

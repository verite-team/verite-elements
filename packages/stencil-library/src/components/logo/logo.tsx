import { Component, Host, Prop, h } from '@stencil/core'

import { Icons } from '../../icons/Icons'

export type LogoName = 'twitter' | 'gitHub' | 'google' | 'apple' | 'paypal'

export interface LogoProps {
  /** The name of the logo to display */
  name: LogoName
  /** The size of the logo in pixels */
  size?: number
}

@Component({
  tag: 'vui-logo',
  styleUrl: 'logo.css',
  shadow: true,
})
export class Logo implements LogoProps {
  /** The name of the logo to display */
  @Prop() name!: LogoName

  /** The size of the logo in pixels */
  @Prop({ reflect: true }) size: number = 20

  render() {
    return (
      <Host
        part="logo"
        style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
        }}
      >
        {Icons[this.name]({
          width: this.size,
          height: this.size,
        })}
      </Host>
    )
  }
}

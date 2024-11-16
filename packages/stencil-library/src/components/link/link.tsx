import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-link',
  styleUrl: 'link.css',
  shadow: true,
})
export class Link {
  @Prop() href?: string
  @Prop() target?: '_blank' | '_self' | '_parent' | '_top'
  @Prop({ reflect: true }) variant?: 'default' | 'muted' | 'destructive' = 'default'
  @Prop({ reflect: true }) disabled?: boolean = false

  render() {
    return (
      <a
        part="link"
        href={this.disabled ? undefined : this.href}
        target={this.target}
        rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <slot></slot>
      </a>
    )
  }
}

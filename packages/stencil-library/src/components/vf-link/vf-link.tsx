import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-link',
  styleUrl: 'vf-link.css',
  shadow: true,
})
export class VfLink {
  @Prop() href?: string;
  @Prop() target?: '_blank' | '_self' | '_parent' | '_top';
  @Prop() variant?: 'default' | 'muted' | 'destructive' = 'default';
  @Prop() disabled?: boolean = false;

  render() {
    return (
      <a
        part="link"
        class={{
          'vf-link': true,
          [`vf-link--${this.variant}`]: true,
          'vf-link--disabled': this.disabled,
        }}
        href={this.disabled ? undefined : this.href}
        target={this.target}
        rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <slot></slot>
      </a>
    );
  }
}

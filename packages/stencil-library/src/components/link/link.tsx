import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

export interface LinkClickDetail {
  name: string
  event: MouseEvent
}

@Component({
  tag: 'vui-link',
  styleUrl: 'link.css',
  shadow: true,
})
export class Link {
  @Prop() name?: string
  @Prop() href?: string
  @Prop() target?: '_blank' | '_self' | '_parent' | '_top'
  @Prop({ reflect: true }) variant?: 'default' | 'muted' | 'destructive' = 'default'
  @Prop({ reflect: true }) disabled?: boolean = false

  @Event({ bubbles: true }) linkClick: EventEmitter<CustomEvent<{ name: string; event: MouseEvent }>>

  private handleClick = (event: MouseEvent) => {
    const evt = new CustomEvent<LinkClickDetail>('linkClick', {
      detail: { name: this.name, event },
    })
    this.linkClick.emit(evt)
  }

  render() {
    return (
      <a
        part="link"
        href={this.disabled ? undefined : this.href}
        target={this.target}
        rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={this.handleClick}
      >
        <slot></slot>
      </a>
    )
  }
}

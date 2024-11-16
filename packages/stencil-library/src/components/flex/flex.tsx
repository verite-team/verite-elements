import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-flex',
  styleUrl: 'flex.css',
  shadow: true,
})
export class Flex {
  @Prop({ reflect: true }) direction?: 'row' | 'column' = 'row'
  @Prop({ reflect: true }) valign?: 'start' | 'center' | 'end' = 'start'
  @Prop({ reflect: true }) halign?: 'start' | 'center' | 'end' = 'start'
  @Prop({ reflect: true }) width?: 'full' | 'auto' = 'auto'
  @Prop({ reflect: true }) grow?: boolean = false
  @Prop() gap?: number = 0
  @Prop() spaceUnit?: number = 4

  private getGapStyle() {
    return `calc(${this.spaceUnit}px * ${this.gap})`
  }

  render() {
    return (
      <Host part="flex" style={{ gap: this.getGapStyle() }}>
        <slot></slot>
      </Host>
    )
  }
}

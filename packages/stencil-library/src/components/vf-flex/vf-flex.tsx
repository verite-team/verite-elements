import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vf-flex',
  styleUrl: 'vf-flex.css',
  shadow: true,
})
export class VfFlex {
  @Prop() direction?: 'row' | 'column' = 'row';
  @Prop() gap?: number = 0;
  @Prop() spaceUnit?: number = 4;
  @Prop() valign?: 'start' | 'center' | 'end' = 'start';
  @Prop() halign?: 'start' | 'center' | 'end' = 'start';
  @Prop() width?: 'full' | 'auto' = 'auto';
  @Prop() grow?: boolean = false;

  private getGapStyle() {
    return `calc(${this.spaceUnit}px * ${this.gap})`;
  }

  render() {
    return (
      <div
        class={{
          'flex': true,
          [`flex-${this.direction}`]: true,
          [`align-${this.valign}`]: true,
          [`justify-${this.halign}`]: true,
          'width-full': this.width === 'full',
          'flex-grow': this.grow,
        }}
        style={{ gap: this.getGapStyle() }}
      >
        <slot></slot>
      </div>
    );
  }
}

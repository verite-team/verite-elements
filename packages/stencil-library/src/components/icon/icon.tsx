import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class Icon {
  @Prop() name!: string
  @Prop() size?: 'xs' | 'sm' | 'md' | 'lg' = 'md'
  @Prop() color?: string

  render() {
    return (
      <span
        class={{
          'material-icons': true,
          icon: true,
          [`icon--${this.size}`]: true,
        }}
        style={{ color: this.color }}
      >
        {this.name}
      </span>
    )
  }
}

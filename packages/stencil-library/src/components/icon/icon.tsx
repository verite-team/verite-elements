import { Component, Prop, State, Watch, h } from '@stencil/core'

@Component({
  tag: 'vui-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class Icon {
  @Prop() name!: string
  @Prop() size?: 'xs' | 'sm' | 'md' | 'lg' = 'md'
  @Prop() color?: string

  @State() private svgContent: string = ''

  @Watch('name')
  async loadIconData() {
    try {
      if (!this.name) return

      const [prefix, iconName] = this.name.split(':')
      if (!prefix || !iconName) {
        console.error('Invalid icon name format. Use "prefix:name" format (e.g., "mdi:home")')
        return
      }

      // Fetch SVG directly from Iconify API
      const response = await fetch(`https://api.iconify.design/${prefix}/${iconName}.svg`)
      if (!response.ok) throw new Error(`Failed to load icon: ${this.name}`)

      const svgText = await response.text()
      this.svgContent = svgText
    } catch (error) {
      console.error(`Failed to load icon: ${this.name}`, error)
    }
  }

  componentWillLoad() {
    this.loadIconData()
  }

  render() {
    const sizeMap = {
      xs: '12px',
      sm: '18px',
      md: '24px',
      lg: '36px',
    }

    return (
      <span
        part="icon"
        class={{
          icon: true,
          [`icon--${this.size}`]: true,
        }}
        style={{
          color: this.color,
          width: sizeMap[this.size],
          height: sizeMap[this.size],
        }}
        innerHTML={this.svgContent}
      >
        {!this.svgContent && <slot></slot>}
      </span>
    )
  }
}

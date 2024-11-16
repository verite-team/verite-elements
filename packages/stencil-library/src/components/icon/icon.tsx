import { Component, Prop, State, Watch, h } from '@stencil/core'

@Component({
  tag: 'vui-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class Icon {
  @Prop() name!: string
  @Prop({ reflect: true }) size?: 'xs' | 'sm' | 'md' | 'lg' = 'md'
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
    return (
      <span part="icon" style={{ color: this.color }} innerHTML={this.svgContent}>
        {!this.svgContent && <slot></slot>}
      </span>
    )
  }
}

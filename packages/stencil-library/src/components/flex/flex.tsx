import { Component, Element, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'vui-flex',
  styleUrl: 'flex.css',
  shadow: true,
})
export class Flex {
  @Element() el!: HTMLElement
  @Prop({ reflect: true }) direction?: 'row' | 'column' = 'row'
  @Prop({ reflect: true }) items?: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'start'
  @Prop({ reflect: true }) justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start'
  @Prop({ reflect: true }) wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap'
  @Prop({ reflect: true }) width?: 'full' | 'auto' = 'auto'
  @Prop({ reflect: true }) grow?: boolean = false
  @Prop() gap?: number = 0
  @Prop() spaceUnit?: number = 4
  @Prop() breakpoint?: string
  @Prop() breakpointDirection?: 'row' | 'column' = 'column'

  private observer?: ResizeObserver
  private container?: HTMLElement

  componentDidLoad() {
    if (this.breakpoint) {
      this.container = this.el.shadowRoot?.querySelector('.flex-container') as HTMLElement
      this.setupResizeObserver()
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect()
  }

  private setupResizeObserver() {
    if (!this.container) return

    this.observer = new ResizeObserver(entries => {
      const entry = entries[0]
      const breakpointValue = parseInt(this.breakpoint || '0')
      if (entry.contentRect.width < breakpointValue) {
        this.container?.style.setProperty('flex-direction', this.breakpointDirection || 'column')
      } else {
        this.container?.style.setProperty('flex-direction', this.direction || 'row')
      }
    })

    this.observer.observe(this.container)
  }

  private getGapStyle() {
    return `calc(${this.spaceUnit}px * ${this.gap})`
  }

  render() {
    const styles: { [key: string]: any } = {
      width: this.width === 'full' ? '100%' : 'auto',
    }

    const getJustifyContent = (justify: string) => {
      const map = {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly',
      }
      return map[justify] || 'flex-start'
    }

    const getAlignItems = (items: string) => {
      const map = {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        stretch: 'stretch',
        baseline: 'baseline',
      }
      return map[items] || 'flex-start'
    }

    return (
      <Host style={styles}>
        <div
          class="flex-container"
          style={{
            gap: this.getGapStyle(),
            flexDirection: this.direction,
            justifyContent: getJustifyContent(this.justify),
            alignItems: getAlignItems(this.items),
            flexWrap: this.wrap,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}

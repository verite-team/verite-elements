import { Component, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core'
import { ToastProps, ToastType } from './toast-interfaces'

import anime from 'animejs'

@Component({
  tag: 'vui-toast',
  styleUrl: 'toast.css',
  shadow: true,
})
export class Toast {
  // Configuration props
  @Prop() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' =
    'bottom-right'
  @Prop({ reflect: true }) theme: 'default' | 'inverted' = 'default'
  @Prop() gap = 8
  @Prop() duration = 4000 // Duration in ms before toast auto-dismisses

  // State management
  @State() toasts: ToastProps[] = []
  @State() expanded = false // Tracks if toast stack is expanded on hover

  // Event emitter for toast dismissal
  @Event() dismiss: EventEmitter<string>

  // Constants
  private readonly MAX_TOASTS = 3

  // Internal tracking maps
  private toastRefs: Map<string, HTMLElement> = new Map()
  private heights: Map<string, number> = new Map()
  private toastTimeouts: Map<string, number> = new Map()
  private remainingDurations: Map<string, number> = new Map()
  private toastRegionRef?: HTMLDivElement

  private static readonly ANIMATION_CONFIG = {
    duration: 150,
    easing: 'easeOutCubic',
    defaultOffset: 50,
    properties: {
      enter: {
        opacity: [0, 1],
      },
      exit: {
        opacity: [1, 0],
        scale: 0.9,
      },
    },
  }

  /**
   * Shows a new toast notification
   * @param toast - Toast properties without ID
   * @returns Generated toast ID
   */
  @Method()
  async show(toast: Omit<ToastProps, 'id'>) {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      type: 'default' as ToastType,
      duration: this.duration, // how long the toast will be visible
      dismissible: true,
      height: 0,
      isNew: true,
      startTime: Date.now(),
      ...toast,
    }

    if (this.toasts.length >= this.MAX_TOASTS) {
      const oldestToast = this.toasts[0]
      this.removeToast(oldestToast.id)
    }

    this.toasts = [...this.toasts, newToast]

    setTimeout(() => {
      this.toasts = this.toasts.map(t => (t.id === id ? { ...t, isNew: false } : t))
    }, 100)

    setTimeout(() => {
      const element = this.toastRefs.get(id)
      if (element) {
        const height = element.offsetHeight
        this.heights.set(id, height)
      }
    }, 100)

    if (newToast.duration && newToast.type !== 'loading') {
      const timeout = window.setTimeout(() => {
        this.removeToast(id)
      }, newToast.duration)
      this.toastTimeouts.set(id, timeout)
    }

    return id
  }

  @Method()
  async update(id: string, toast: Partial<ToastProps>) {
    this.toasts = this.toasts.map(t => {
      if (t.id === id) {
        return { ...t, ...toast }
      }
      return t
    })
  }
  @Method()
  async dismissToast(id: string) {
    this.removeToast(id)
  }

  /**
   * Handles toast removal with animation
   */
  private removeToast(id: string) {
    const timeout = this.toastTimeouts.get(id)
    if (timeout) {
      clearTimeout(timeout)
      this.toastTimeouts.delete(id)
    }

    const toast = this.toasts.find(t => t.id === id)
    if (toast) {
      this.toasts = this.toasts.map(t => (t.id === id ? { ...t, removing: true } : t))

      const element = this.toastRefs.get(id)
      if (element) {
        element.classList.add('removed')

        const isTopPosition = this.position.startsWith('top-')
        const exitOffset = isTopPosition ? -Toast.ANIMATION_CONFIG.defaultOffset : Toast.ANIMATION_CONFIG.defaultOffset

        try {
          anime({
            targets: element,
            ...Toast.ANIMATION_CONFIG.properties.exit,
            translateY: [0, exitOffset],
            duration: Toast.ANIMATION_CONFIG.duration,
            easing: Toast.ANIMATION_CONFIG.easing,
          })
        } catch (e) {
          console.warn('Toast animation failed:', e)
        }
      }

      this.toastRefs.delete(id)
      this.heights.delete(id)

      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id)
        this.dismiss.emit(id)
      }, 150)
    }
  }

  /**
   * Pause toast timeouts on mouse enter
   */
  private handleMouseEnter = () => {
    this.expanded = true
    this.updateToastRegionHeight()
    this.toastTimeouts.forEach((timeout, id) => {
      const toast = this.toasts.find(t => t.id === id)
      if (toast) {
        const elapsed = Date.now() - (toast as any).startTime
        const remaining = toast.duration - elapsed
        this.remainingDurations.set(id, remaining > 0 ? remaining : 0)
      }
      clearTimeout(timeout)
    })
  }

  /**
   * Resume toast timeouts on mouse leave
   */
  private handleMouseLeave = () => {
    this.expanded = false
    this.updateToastRegionHeight()
    this.toasts.forEach(toast => {
      if (toast.duration && toast.type !== 'loading') {
        const remaining = this.remainingDurations.get(toast.id) || toast.duration
        const timeout = window.setTimeout(() => {
          this.removeToast(toast.id)
        }, remaining)
        this.toastTimeouts.set(toast.id, timeout)
      }
    })
  }

  /**
   * Animation helpers
   */
  private calculateExpandedOffset(index: number): number {
    if (index === this.toasts.length - 1) return 0

    const isTopPosition = this.position.startsWith('top-')
    let offset = 0

    if (isTopPosition) {
      for (let i = index + 1; i < this.toasts.length; i++) {
        const toast = this.toasts[i]
        const height = this.heights.get(toast.id) || 0
        offset += height + this.gap
      }
    } else {
      for (let i = index; i >= 0; i--) {
        const toast = this.toasts[i]
        const height = this.heights.get(toast.id) || 0
        offset -= height + this.gap
      }
    }
    return offset
  }

  private animateToast(element: HTMLElement, index: number) {
    const toastsBefore = this.toasts.length - index - 1
    const isTopPosition = this.position.startsWith('top-')

    const stackedOffset = isTopPosition ? toastsBefore * this.gap : -(toastsBefore * this.gap)
    const expandedOffset = this.calculateExpandedOffset(index)
    const offset = this.expanded ? expandedOffset : stackedOffset
    const baseScale = this.expanded ? 1 : 1 - toastsBefore * 0.05
    const translateZ = this.expanded ? 0 : -toastsBefore * 10

    if (this.toasts[index].isNew) {
      const entranceOffset = isTopPosition
        ? -Toast.ANIMATION_CONFIG.defaultOffset
        : Toast.ANIMATION_CONFIG.defaultOffset

      anime({
        targets: element,
        ...Toast.ANIMATION_CONFIG.properties.enter,
        translateY: [entranceOffset, offset],
        scale: baseScale,
        translateZ: translateZ,
        duration: Toast.ANIMATION_CONFIG.duration,
        easing: Toast.ANIMATION_CONFIG.easing,
      })
    } else {
      anime({
        targets: element,
        translateY: offset,
        scale: baseScale,
        translateZ: translateZ,
        duration: Toast.ANIMATION_CONFIG.duration,
        easing: Toast.ANIMATION_CONFIG.easing,
      })
    }
  }

  /**
   * Layout management
   */
  private updateToastRegionHeight() {
    if (!this.toastRegionRef) return

    const visibleToasts = this.toasts.slice(-this.MAX_TOASTS)
    if (visibleToasts.length === 0) {
      this.toastRegionRef.style.height = '0px'
      return
    }

    if (this.expanded) {
      // When expanded, sum up heights of all toasts plus gaps
      let totalHeight = 0
      visibleToasts.forEach((toast, index) => {
        const height = this.heights.get(toast.id) || 0
        totalHeight += height
        if (index < visibleToasts.length - 1) {
          totalHeight += this.gap
        }
      })
      this.toastRegionRef.style.height = `${totalHeight}px`
    } else {
      const lastToastHeight = this.heights.get(visibleToasts[visibleToasts.length - 1]?.id) || 0
      const stackOffset = (visibleToasts.length - 1) * this.gap
      this.toastRegionRef.style.height = `${lastToastHeight + stackOffset}px`
    }
  }

  componentDidRender() {
    this.toasts.forEach((toast, index) => {
      const element = this.toastRefs.get(toast.id)
      if (element) {
        const currentHeight = element.offsetHeight
        const storedHeight = this.heights.get(toast.id)
        if (currentHeight !== storedHeight) {
          this.heights.set(toast.id, currentHeight)
        }
        this.animateToast(element, index)
      }
    })
    this.updateToastRegionHeight()
  }

  render() {
    const visibleToasts = this.toasts.slice(-this.MAX_TOASTS)

    return (
      <Host
        class={{
          'toast-container': true,
          [this.position]: true,
        }}
      >
        <div
          class="toast-region"
          ref={el => (this.toastRegionRef = el as HTMLDivElement)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {visibleToasts.map((toast, index) => (
            <div
              key={toast.id}
              ref={el => this.toastRefs.set(toast.id, el as HTMLElement)}
              class={{
                toast: true,
                [toast.type]: true,
                removing: toast.removing,
                stacked: !this.expanded,
                expanded: this.expanded,
              }}
              style={{
                zIndex: `${index + 1}`,
              }}
              part="toast"
            >
              <div class="content">
                <div class="text">
                  {toast.title && <div class="title">{toast.title}</div>}
                  {toast.description && <div class="description">{toast.description}</div>}
                </div>
              </div>

              {toast.action && (
                <vui-button variant="ghost" size="sm" onClick={toast.action.onClick}>
                  {toast.action.label}
                </vui-button>
              )}

              {toast.dismissible && (
                <vui-button
                  variant="ghost"
                  size="icon"
                  class="close"
                  onClick={() => this.removeToast(toast.id)}
                  aria-label="Dismiss"
                >
                  <vui-icon name="ic:outline-close" size="sm" />
                </vui-button>
              )}
            </div>
          ))}
        </div>
      </Host>
    )
  }
}

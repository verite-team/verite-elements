import { Component, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core'
import { ToastProps, ToastType } from './toast-interfaces'

import { animate } from 'motion'

@Component({
  tag: 'vui-toast',
  styleUrl: 'toast.css',
  shadow: true,
})
export class Toast {
  @Prop() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' =
    'bottom-right'
  @State() toasts: ToastProps[] = []

  @Event() dismiss: EventEmitter<string>

  private toastTimeouts: Map<string, number> = new Map()

  @State() expanded = false
  private toastRefs: Map<string, HTMLElement> = new Map()
  private heights: Map<string, number> = new Map()

  private readonly MAX_TOASTS = 3

  @Method()
  async show(toast: Omit<ToastProps, 'id'>) {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      type: 'default' as ToastType,
      duration: 4000,
      dismissible: true,
      height: 0,
      isNew: true,
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
        console.log(`Toast ${id} initial height:`, height)
        console.log('All heights:', Object.fromEntries(this.heights))
      }
    }, 0)

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

  private removeToast(id: string) {
    const timeout = this.toastTimeouts.get(id)
    if (timeout) {
      clearTimeout(timeout)
      this.toastTimeouts.delete(id)
    }

    const toast = this.toasts.find(t => t.id === id)
    if (toast) {
      this.toasts = this.toasts.map(t => (t.id === id ? { ...t, removing: true } : t))

      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id)
        this.dismiss.emit(id)
      }, 200)
    }
  }

  private handleMouseEnter = () => {
    this.expanded = true
    this.toastTimeouts.forEach(timeout => {
      clearTimeout(timeout)
    })
  }

  private handleMouseLeave = () => {
    this.expanded = false
    // this.toasts.forEach(toast => {
    //   if (toast.duration && toast.type !== 'loading') {
    //     const timeout = window.setTimeout(() => {
    //       this.removeToast(toast.id)
    //     }, toast.duration)
    //     this.toastTimeouts.set(toast.id, timeout)
    //   }
    // })
  }

  private calculateExpandedOffset(index: number): number {
    if (index === this.toasts.length - 1) return 0

    const isTopPosition = this.position.startsWith('top-')
    let offset = 0

    for (let i = index + 1; i < this.toasts.length; i++) {
      const toast = this.toasts[i]
      const height = this.heights.get(toast.id) || 0
      offset += isTopPosition ? height + 2 : -(height + 2)
    }

    console.log(`Calculating expanded offset for toast ${index}:`, {
      currentToastId: this.toasts[index].id,
      offset,
      index,
      isNewest: index === this.toasts.length - 1,
      position: this.position,
      isTopPosition,
      totalToasts: this.toasts.length,
    })

    return offset
  }

  private animateToast(element: HTMLElement, index: number) {
    const toastsBefore = this.toasts.length - index - 1
    const isTopPosition = this.position.startsWith('top-')
    const toast = this.toasts[index]

    const stackedOffset = toastsBefore * 16
    const expandedOffset = this.calculateExpandedOffset(index)
    const offset = this.expanded ? expandedOffset : stackedOffset
    const baseScale = this.expanded ? 1 : 1 - toastsBefore * 0.05
    const translateZ = this.expanded ? 0 : -toastsBefore * 10

    if (toast.isNew) {
      // Set initial state immediately
      element.style.opacity = '0'

      // Delay the entrance animation slightly
      requestAnimationFrame(() => {
        const entranceOffset = isTopPosition ? -50 : 50

        animate(
          element,
          {
            y: [entranceOffset, offset],
            opacity: [0, 1],
            scale: baseScale,
            z: translateZ,
          },
          {
            type: 'spring',
            stiffness: 800,
            damping: 40,
            mass: 0.2,
          }
        )
      })
    } else {
      // Normal stacking/expanding animation
      animate(
        element,
        {
          y: offset,
          scale: baseScale,
          z: translateZ,
        },
        {
          type: 'spring',
          stiffness: 800,
          damping: 40,
          mass: 0.2,
        }
      )
    }
  }

  componentDidRender() {
    console.log('Component rerendered. Current toasts:', this.toasts.length)
    this.toasts.forEach((toast, index) => {
      const element = this.toastRefs.get(toast.id)
      if (element) {
        const currentHeight = element.offsetHeight
        const storedHeight = this.heights.get(toast.id)
        if (currentHeight !== storedHeight) {
          console.log(`Height changed for toast ${toast.id}:`, {
            old: storedHeight,
            new: currentHeight,
          })
          this.heights.set(toast.id, currentHeight)
        }
        this.animateToast(element, index)
      }
    })
  }

  render() {
    const visibleToasts = this.toasts.slice(-this.MAX_TOASTS)

    return (
      <Host
        class={`toast-container dark ${this.position}`}
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
              zIndex: `${this.toasts.length + index}`,
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
      </Host>
    )
  }
}

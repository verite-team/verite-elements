import { Component, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core'
import { ToastProps, ToastType } from './toast-interfaces'

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

  @Method()
  async show(toast: Omit<ToastProps, 'id'>) {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      type: 'default' as ToastType,
      duration: 4000,
      dismissible: true,
      ...toast,
    }

    this.toasts = [...this.toasts, newToast]

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

  // private getIcon(type: ToastType) {
  //   switch (type) {
  //     case 'success':
  //       return <vui-icon name="ic:outline-check-circle" size="sm" class="success" />
  //     case 'error':
  //       return <vui-icon name="ic:outline-error" size="sm" class="error" />
  //     case 'loading':
  //       return <vui-icon name="ic:outline-refresh" size="sm" class="loading" />
  //     default:
  //       return null
  //   }
  // }

  render() {
    return (
      <Host class={`toast-container dark ${this.position}`}>
        {this.toasts.map(toast => (
          <div
            key={toast.id}
            class={{
              toast: true,
              [toast.type]: true,
              removing: toast.removing,
            }}
            part="toast"
          >
            <div class="content">
              {/* {this.getIcon(toast.type)} */}
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

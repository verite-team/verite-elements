export type ToastType = 'success' | 'error' | 'loading' | 'default'

export interface ToastProps {
  id: string
  title?: string
  description?: string
  type?: ToastType
  duration?: number
  dismissible?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

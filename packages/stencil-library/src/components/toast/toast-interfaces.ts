export type ToastType = 'success' | 'error' | 'loading' | 'default'

export interface ToastProps {
  id: string
  type: ToastType
  title?: string
  description?: string
  duration?: number
  dismissible?: boolean
  action?: {
    label: string
    onClick: () => void
  }
  removing?: boolean
}

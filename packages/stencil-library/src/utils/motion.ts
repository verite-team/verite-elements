interface MotionItem {
  id: string
  [key: string]: any
}

interface MotionOptions {
  duration?: number
  enterFrom?: Record<string, string | number>
  enterTo?: Record<string, string | number>
  exitFrom?: Record<string, string | number>
  exitTo?: Record<string, string | number>
  onComplete?: () => void
}

export class MotionController<T extends MotionItem> {
  private items: T[] = []
  private animatingItems: Set<string> = new Set()
  private options: Required<MotionOptions>

  constructor(options: MotionOptions = {}) {
    this.options = {
      duration: 200,
      enterFrom: { opacity: '0', transform: 'translateY(10px)' },
      enterTo: { opacity: '1', transform: 'translateY(0)' },
      exitFrom: { opacity: '1', transform: 'translateY(0)' },
      exitTo: { opacity: '0', transform: 'translateY(10px)' },
      onComplete: () => {},
      ...options,
    }
  }
  add(item: Omit<T, 'motion'>): void {
    const motion = {
      isEntering: true,
      isExiting: false,
      style: this.options.enterFrom,
    }

    const newItem = {
      ...item,
      motion,
    } as unknown as T

    this.animatingItems.add(newItem.id)
    this.items = [...this.items, newItem]

    // Start enter animation
    requestAnimationFrame(() => {
      this.items = this.items.map(i =>
        i.id === newItem.id ? { ...i, motion: { ...i.motion, style: this.options.enterTo } } : i
      )
    })

    // Cleanup after animation
    setTimeout(() => {
      this.animatingItems.delete(newItem.id)
      this.items = this.items.map(i =>
        i.id === newItem.id ? { ...i, motion: { isEntering: false, isExiting: false, style: {} } } : i
      )
      this.options.onComplete()
    }, this.options.duration)
  }

  remove(id: string): void {
    const item = this.items.find(i => i.id === id)
    if (!item || this.animatingItems.has(id)) return

    this.animatingItems.add(id)

    // Start exit animation
    this.items = this.items.map(i =>
      i.id === id ? { ...i, motion: { isEntering: false, isExiting: true, style: this.options.exitFrom } } : i
    )

    requestAnimationFrame(() => {
      this.items = this.items.map(i =>
        i.id === id ? { ...i, motion: { ...i.motion, style: this.options.exitTo } } : i
      )
    })

    // Remove item after animation
    setTimeout(() => {
      this.items = this.items.filter(i => i.id !== id)
      this.animatingItems.delete(id)
      this.options.onComplete()
    }, this.options.duration)
  }

  getItems(): T[] {
    return this.items
  }
}

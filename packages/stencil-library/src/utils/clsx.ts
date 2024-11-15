type ClassValue = string | boolean | null | undefined | Record<string, boolean>

export function clsx(...classes: ClassValue[]): string {
  const result: string[] = []

  classes.forEach(cls => {
    if (!cls) return

    if (typeof cls === 'string') {
      result.push(cls)
    } else if (typeof cls === 'object') {
      Object.entries(cls).forEach(([key, value]) => {
        if (value) {
          result.push(key)
        }
      })
    }
  })

  return result.join(' ')
}

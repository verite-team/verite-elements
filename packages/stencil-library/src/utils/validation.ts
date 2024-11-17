export interface ValidationRule {
  message: string
  validate: (value: any) => boolean
}

export const ValidationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    message,
    validate: (value: any) => {
      if (value === null || value === undefined) return false
      if (typeof value === 'string') return value.trim().length > 0
      return true
    },
  }),

  email: (message = 'Please enter a valid email'): ValidationRule => ({
    message,
    validate: (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
  }),

  // Add more validation rules as needed
}

export interface ValidationRule {
  message: string
  validate: (value: any) => boolean
}

export interface PasswordValidationOptions {
  minLength?: number
  maxLength?: number
  requireUppercase?: boolean
  requireLowercase?: boolean
  requireNumbers?: boolean
  requireSpecialChars?: boolean
}

export interface EmailValidationOptions {
  allowedDomains?: string[] // Only these domains will be allowed
  blockedDomains?: string[] // These domains will be blocked
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

  allowedDomains: (domains: string[], message?: string): ValidationRule => ({
    message: message || `Email domain must be one of: ${domains.join(', ')}`,
    validate: (value: string) => {
      const domain = value.split('@')[1]?.toLowerCase()
      return domain ? domains.includes(domain) : false
    },
  }),

  blockedDomains: (domains: string[], message?: string): ValidationRule => ({
    message: message || `Email domain cannot be: ${domains.join(', ')}`,
    validate: (value: string) => {
      const domain = value.split('@')[1]?.toLowerCase()
      return domain ? !domains.includes(domain) : true
    },
  }),

  minLength: (length: number, message?: string): ValidationRule => ({
    message: message || `Must be at least ${length} characters`,
    validate: (value: string) => value.length >= length,
  }),

  maxLength: (length: number, message?: string): ValidationRule => ({
    message: message || `Must not exceed ${length} characters`,
    validate: (value: string) => value.length <= length,
  }),

  hasUppercase: (message = 'Must contain at least one uppercase letter'): ValidationRule => ({
    message,
    validate: (value: string) => /[A-Z]/.test(value),
  }),

  hasLowercase: (message = 'Must contain at least one lowercase letter'): ValidationRule => ({
    message,
    validate: (value: string) => /[a-z]/.test(value),
  }),

  hasNumber: (message = 'Must contain at least one number'): ValidationRule => ({
    message,
    validate: (value: string) => /\d/.test(value),
  }),

  hasSpecialChar: (message = 'Must contain at least one special character'): ValidationRule => ({
    message,
    validate: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
  }),

  // Helper function to create password validation rules
  createPasswordRules: (options: PasswordValidationOptions = {}): ValidationRule[] => {
    const rules: ValidationRule[] = [ValidationRules.required('Password is required')]

    if (options.minLength) {
      rules.push(ValidationRules.minLength(options.minLength))
    }

    if (options.maxLength) {
      rules.push(ValidationRules.maxLength(options.maxLength))
    }

    if (options.requireUppercase) {
      rules.push(ValidationRules.hasUppercase())
    }

    if (options.requireLowercase) {
      rules.push(ValidationRules.hasLowercase())
    }

    if (options.requireNumbers) {
      rules.push(ValidationRules.hasNumber())
    }

    if (options.requireSpecialChars) {
      rules.push(ValidationRules.hasSpecialChar())
    }

    return rules
  },

  // Helper function to create email validation rules
  createEmailRules: (options?: EmailValidationOptions): ValidationRule[] => {
    const rules: ValidationRule[] = [
      ValidationRules.required('Email is required'),
      ValidationRules.email('Please enter a valid email address'),
    ]

    if (options?.allowedDomains?.length) {
      rules.push(ValidationRules.allowedDomains(options.allowedDomains))
    }

    if (options?.blockedDomains?.length) {
      rules.push(ValidationRules.blockedDomains(options.blockedDomains))
    }

    return rules
  },

  name: (fieldName: string, message?: string): ValidationRule => ({
    message: message || `${fieldName} is required`,
    validate: (value: string) => {
      return value.trim().length > 0
    },
  }),

  // Add helper function for name validation
  createNameRules: (fieldName: string): ValidationRule[] => {
    return [ValidationRules.required(`${fieldName} is required`), ValidationRules.name(fieldName)]
  },
}

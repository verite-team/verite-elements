import { i18n } from '../stores/i18n'

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
  required: (message = ''): ValidationRule => ({
    message: message || i18n.t('validation.required'),
    validate: (value: any) => {
      if (value === null || value === undefined) return false
      if (typeof value === 'string') return value.trim().length > 0
      return true
    },
  }),

  email: (message: string): ValidationRule => ({
    message,
    validate: (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
  }),

  allowedDomains: (domains: string[], message?: string): ValidationRule => ({
    message: message || i18n.t('validation.email.allowedDomains', { domains: domains.join(', ') }),
    validate: (value: string) => {
      const domain = value.split('@')[1]?.toLowerCase()
      return domain ? domains.includes(domain) : false
    },
  }),

  blockedDomains: (domains: string[], message?: string): ValidationRule => ({
    message: message || i18n.t('validation.email.blockedDomains', { domains: domains.join(', ') }),
    validate: (value: string) => {
      const domain = value.split('@')[1]?.toLowerCase()
      return domain ? !domains.includes(domain) : true
    },
  }),

  minLength: (length: number, message?: string): ValidationRule => ({
    message: message || i18n.t('validation.password.minLength', { length: length.toString() }),
    validate: (value: string) => value.length >= length,
  }),

  maxLength: (length: number, message?: string): ValidationRule => ({
    message: message || i18n.t('validation.password.maxLength', { length: length.toString() }),
    validate: (value: string) => value.length <= length,
  }),

  hasUppercase: (message = ''): ValidationRule => ({
    message: message || i18n.t('validation.password.uppercase'),
    validate: (value: string) => /[A-Z]/.test(value),
  }),

  hasLowercase: (message = ''): ValidationRule => ({
    message: message || i18n.t('validation.password.lowercase'),
    validate: (value: string) => /[a-z]/.test(value),
  }),

  hasNumber: (message = ''): ValidationRule => ({
    message: message || i18n.t('validation.password.number'),
    validate: (value: string) => /\d/.test(value),
  }),

  hasSpecialChar: (message = ''): ValidationRule => ({
    message: message || i18n.t('validation.password.specialChar'),
    validate: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
  }),

  // Helper function to create password validation rules
  createPasswordRules: (options: PasswordValidationOptions = {}): ValidationRule[] => {
    const rules: ValidationRule[] = [ValidationRules.required(i18n.t('validation.password.required'))]

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
      ValidationRules.required(i18n.t('validation.email.required')),
      ValidationRules.email(i18n.t('validation.email.invalid')),
    ]

    if (options?.allowedDomains?.length) {
      rules.push(ValidationRules.allowedDomains(options.allowedDomains))
    }

    if (options?.blockedDomains?.length) {
      rules.push(ValidationRules.blockedDomains(options.blockedDomains))
    }

    return rules
  },

  name: (fieldName: string, message = ''): ValidationRule => ({
    message: message || i18n.t('validation.required', { fieldName }),
    validate: (value: string) => {
      return value.trim().length > 0
    },
  }),

  // Add helper function for name validation
  createNameRules: (fieldName: string): ValidationRule[] => {
    const fieldNameTranslation = i18n.t(fieldName)
    return [
      ValidationRules.required(i18n.t('validation.required', { fieldName: fieldNameTranslation })),
      ValidationRules.name(fieldNameTranslation),
    ]
  },
}

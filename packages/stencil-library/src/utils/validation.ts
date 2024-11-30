import { I18nProvider } from '../components/i18n/i18n-provider'

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
  allowedDomains?: string[]
  blockedDomains?: string[]
}

export const createValidationRules = (element: HTMLElement) => {
  const getTranslation = (key: string, params?: Record<string, string>): string => {
    const provider = I18nProvider.getClosestProvider(element)
    if (!provider) {
      return key
    }
    return provider.getTranslation(key, params)
  }

  const ValidationRules = {
    required: (fieldName = ''): ValidationRule => ({
      message: getTranslation('$validation.required', { fieldName }),
      validate: (value: any) => {
        if (value === null || value === undefined) return false
        if (typeof value === 'string') return value.trim().length > 0
        return true
      },
    }),

    email: (message = ''): ValidationRule => ({
      message: message || getTranslation('$validation.email.invalid'),
      validate: (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
    }),

    allowedDomains: (domains: string[], message?: string): ValidationRule => ({
      message: message || getTranslation('$validation.email.allowedDomains', { domains: domains.join(', ') }),
      validate: (value: string) => {
        const domain = value.split('@')[1]?.toLowerCase()
        return domain ? domains.includes(domain) : false
      },
    }),

    blockedDomains: (domains: string[], message?: string): ValidationRule => ({
      message: message || getTranslation('$validation.email.blockedDomains', { domains: domains.join(', ') }),
      validate: (value: string) => {
        const domain = value.split('@')[1]?.toLowerCase()
        return domain ? !domains.includes(domain) : true
      },
    }),

    minLength: (length: number, message?: string): ValidationRule => ({
      message: message || getTranslation('$validation.password.minLength', { length: length.toString() }),
      validate: (value: string) => value.length >= length,
    }),

    maxLength: (length: number, message?: string): ValidationRule => ({
      message: message || getTranslation('$validation.password.maxLength', { length: length.toString() }),
      validate: (value: string) => value.length <= length,
    }),

    hasUppercase: (message = ''): ValidationRule => ({
      message: message || getTranslation('$validation.password.uppercase'),
      validate: (value: string) => /[A-Z]/.test(value),
    }),

    hasLowercase: (message = ''): ValidationRule => ({
      message: message || getTranslation('$validation.password.lowercase'),
      validate: (value: string) => /[a-z]/.test(value),
    }),

    hasNumber: (message = ''): ValidationRule => ({
      message: message || getTranslation('$validation.password.number'),
      validate: (value: string) => /\d/.test(value),
    }),

    hasSpecialChar: (message = ''): ValidationRule => ({
      message: message || getTranslation('$validation.password.specialChar'),
      validate: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    }),

    createNameRules: (fieldName: string): ValidationRule[] => {
      return [
        ValidationRules.required(fieldName),
        {
          message: getTranslation('$validation.required', { fieldName }),
          validate: (value: string) => /^[a-zA-Z\s-']+$/.test(value.trim()),
        },
      ]
    },

    createPhoneRules: (fieldName: string): ValidationRule[] => {
      return [
        ValidationRules.required(fieldName),
        {
          message: getTranslation('$validation.required', { fieldName }),
          validate: (value: string) => /^\+?[\d\s-()]+$/.test(value.trim()),
        },
      ]
    },

    // Helper functions
    createPasswordRules: (options: PasswordValidationOptions = {}): ValidationRule[] => {
      const rules: ValidationRule[] = [ValidationRules.required(getTranslation('$validation.password.required'))]

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

    createEmailRules: (options?: EmailValidationOptions): ValidationRule[] => {
      const rules: ValidationRule[] = [
        ValidationRules.required(getTranslation('$validation.email.required')),
        ValidationRules.email(getTranslation('$validation.email.invalid')),
      ]

      if (options?.allowedDomains?.length) {
        rules.push(ValidationRules.allowedDomains(options.allowedDomains))
      }
      if (options?.blockedDomains?.length) {
        rules.push(ValidationRules.blockedDomains(options.blockedDomains))
      }

      return rules
    },
  }

  return ValidationRules
}

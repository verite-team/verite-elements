export interface FormSubmitDetail {
  firstName: string
  lastName: string
  email: string
  password: string
  event: SubmitEvent | Event
}

export interface SignUpLabels {
  title?: string
  description?: string
  firstNameLabel?: string
  firstNamePlaceholder?: string
  lastNameLabel?: string
  lastNamePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  passwordLabel?: string
  passwordPlaceholder?: string
  showPasswordLabel?: string
  hidePasswordLabel?: string
  signUpButtonText?: string
  haveAccountText?: string
  signInButtonText?: string
}

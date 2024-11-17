import { Component, Prop, State, Watch } from '@stencil/core'

import { ValidationRule } from '../../utils/validation'

@Component({
  tag: 'vui-form-control',
})
export class FormControl {
  @Prop() value: any
  @Prop() rules: ValidationRule[] = []
  @State() errorMessage: string = ''
  @State() isDirty: boolean = false

  @Watch('value')
  validateValue() {
    if (!this.isDirty) return

    for (const rule of this.rules) {
      if (!rule.validate(this.value)) {
        this.errorMessage = rule.message
        return
      }
    }
    this.errorMessage = ''
  }

  onInput(event: Event) {
    this.isDirty = true
    this.value = (event.target as HTMLInputElement).value
    this.validateValue()
  }
}

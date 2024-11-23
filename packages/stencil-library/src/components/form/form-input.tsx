import { Component, Host, Prop, h } from '@stencil/core'

import { getI18nStore } from '../../stores/i18n'

@Component({
  tag: 'vui-form-input',
  styleUrl: 'form-input.css',
  shadow: true,
})
export class Label {
  @Prop() label: string
  @Prop() htmlFor: string
  @Prop() errorMessage?: string

  async componentWillLoad() {
    await getI18nStore().waitUntilReady
  }

  render() {
    return (
      <Host>
        <label class="sr-only" htmlFor={this.htmlFor}>
          {this.label}
        </label>
        <slot></slot>
        {this.errorMessage && <vui-error-message message={this.errorMessage} />}
      </Host>
    )
  }
}

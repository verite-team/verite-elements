import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core'

import { I18nProvider } from './i18n-provider'

@Component({
  tag: 'vui-i18n',
  shadow: false,
})
export class Translate {
  @Element() el!: HTMLElement
  @Prop() text: string
  @Prop({ reflect: true }) params?: Record<string, string> | string
  @State() translatedText: string

  @Watch('text')
  @Watch('params')
  async translateText() {
    const provider = I18nProvider.getClosestProvider(this.el)
    if (!provider) {
      console.warn('No i18n provider found, using text as fallback')
      this.translatedText = this.text
      return
    }

    const parsedParams = typeof this.params === 'string' ? JSON.parse(this.params) : this.params
    this.translatedText = provider.getTranslation(this.text, parsedParams)
  }

  async componentWillLoad() {
    await this.translateText()
  }

  render() {
    return <Host part="translated">{this.translatedText}</Host>
  }
}

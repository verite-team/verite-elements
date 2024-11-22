import { Component, Host, Prop, State, Watch, h } from '@stencil/core'

import { i18n } from '../../stores/i18n'

@Component({
  tag: 'vui-i18n',
  shadow: false,
})
export class Translate {
  @Prop() text: string
  @Prop({ reflect: true }) params?: Record<string, string> | string
  @State() translatedText: string

  @Watch('text')
  @Watch('params')
  async translateText() {
    const params = typeof this.params === 'string' ? JSON.parse(this.params) : this.params
    this.translatedText = i18n.t(this.text, params)
  }

  async componentWillLoad() {
    await i18n.waitUntilReady
    this.translateText()
  }

  render() {
    return <Host part="translated">{this.translatedText}</Host>
  }
}

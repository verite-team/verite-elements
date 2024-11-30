import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

export interface Language {
  code: string
  name: string
}

@Component({
  tag: 'vui-language-switcher',
  styleUrl: 'language-switcher.css',
  shadow: true,
})
export class LanguageSwitcher {
  @Prop() languages: Language[] | string = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ]

  @Prop() currentLocale?: string
  @Prop() variant: 'select' | 'buttons' = 'select'

  @Event() localeChange: EventEmitter<string>

  private parsedLanguages: Language[] = []

  componentWillLoad() {
    this.parsedLanguages = typeof this.languages === 'string' ? JSON.parse(this.languages) : this.languages
  }

  private handleChange = (event: Event) => {
    const select = event.target as HTMLSelectElement
    this.localeChange.emit(select.value)
  }

  private handleButtonClick = (code: string) => {
    this.localeChange.emit(code)
  }

  render() {
    if (this.variant === 'select') {
      return (
        <select class="language-select" onChange={this.handleChange}>
          {this.parsedLanguages.map(lang => (
            <option key={lang.code} value={lang.code} selected={this.currentLocale === lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      )
    }

    return (
      <div class="language-buttons">
        {this.parsedLanguages.map(lang => (
          <vui-button
            key={lang.code}
            variant={this.currentLocale === lang.code ? 'default' : 'ghost'}
            onClick={() => this.handleButtonClick(lang.code)}
          >
            {lang.name}
          </vui-button>
        ))}
      </div>
    )
  }
}

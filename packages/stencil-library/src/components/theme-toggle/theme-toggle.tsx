import { Component, State, Watch, h } from '@stencil/core'

type Theme = 'light' | 'dark'

@Component({
  tag: 'vui-theme-toggle',
  styleUrl: 'theme-toggle.css',
  shadow: true,
})
export class ThemeToggle {
  @State() theme: Theme = 'light'

  componentWillLoad() {
    this.theme = this.getInitialTheme()
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme
    }

    // Check data-theme attribute
    const dataTheme = document.documentElement.getAttribute('data-theme') as Theme
    if (dataTheme === 'dark' || dataTheme === 'light') {
      return dataTheme
    }

    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  @Watch('theme')
  themeChanged(newValue: Theme) {
    document.documentElement.setAttribute('data-theme', newValue)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newValue)
    localStorage.setItem('theme', newValue)
  }

  private handleClick = () => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }

  render() {
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark'

    return (
      <vui-button
        part="button"
        variant="ghost"
        size="icon"
        onClick={this.handleClick}
        aria-label={`Switch to ${nextTheme} theme`}
      >
        <vui-icon name={this.theme === 'dark' ? 'ic:outline-light-mode' : 'ic:outline-dark-mode'} size="md" />
      </vui-button>
    )
  }
}

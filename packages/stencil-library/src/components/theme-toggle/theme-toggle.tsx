import { Component, State, Watch, h } from '@stencil/core'

@Component({
  tag: 'vui-theme-toggle',
  styleUrl: 'theme-toggle.css',
  shadow: true,
})
export class ThemeToggle {
  @State() theme: 'light' | 'dark' = 'light'

  componentWillLoad() {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      this.theme = storedTheme
      return
    }

    // Check data-theme attribute
    const dataTheme = document.documentElement.getAttribute('data-theme')
    if (dataTheme === 'dark' || dataTheme === 'light') {
      this.theme = dataTheme
      return
    }

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark'
    }
  }

  @Watch('theme')
  themeChanged(newValue: string) {
    // Update DOM
    document.documentElement.setAttribute('data-theme', newValue)
    // Store preference
    localStorage.setItem('theme', newValue)
  }

  handleClick = () => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }

  render() {
    return (
      <button
        class="theme-toggle"
        onClick={this.handleClick}
        aria-label={`Switch to ${this.theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <vui-icon name={this.theme === 'dark' ? 'light_mode' : 'dark_mode'} size="md"></vui-icon>
      </button>
    )
  }
}

export class ButtonTheme {
  constructor(i18n, theme) {
    this.i18n = i18n
    this.theme = theme
    this.supportedLanguages = i18n.supportedLanguages
    this.currentLanguage = i18n.locale
  }

  onClickThemeButton() {
    this.theme.toggleTheme()
    this.updateThemeButtonStyles()
  }

  updateThemeButtonStyles() {
    const themeIcon = document.getElementById('theme-icon')
    if (themeIcon) {
      if (document.documentElement.classList.contains('dark')) {
        themeIcon.textContent = 'light_mode'
      } else {
        themeIcon.textContent = 'dark_mode'
      }
    }
  }

  render() {
    return /* html */ `
        <div class="button-theme">
            <button class="button-theme__container" id="theme-toggle" >
                <span class="material-symbols-outlined button-theme__icon" id="theme-icon">dark_mode</span>
            </button>
        </div>
    `
  }

  attachEventListeners() {
    const themeToggle = document.getElementById('theme-toggle')
    if (themeToggle)
      themeToggle.addEventListener('click', () => this.onClickThemeButton())
  }
}

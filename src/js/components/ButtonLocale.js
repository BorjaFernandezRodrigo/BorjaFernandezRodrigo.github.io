export class ButtonLocale {
  constructor(i18n) {
    this.i18n = i18n
    this.supportedLanguages = i18n.supportedLanguages
    this.currentLanguage = i18n.locale
  }

  onClickLanguageButton(lang) {
    this.i18n.setLanguage(lang).then(() => {
      this.i18n.updateDOM()
      this.currentLanguage = lang
      this.updateLanguageButtonStyles()
    })
  }

  updateLanguageButtonStyles() {
    this.supportedLanguages.forEach((lang) => {
      const button = document.getElementById(`language-toggle-${lang}`)
      if (button) {
        if (this.currentLanguage === lang) {
          button.classList.add('button-locale__btn--active')
          button.classList.remove('button-locale__btn--inactive')
        } else {
          button.classList.add('button-locale__btn--inactive')
          button.classList.remove('button-locale__btn--active')
        }
      }
    })
  }

  render() {
    return /* html */ `
      <div class="button-locale">
          <div class="button-locale__container">
          ${this.supportedLanguages
            .map(
              (lang, index) =>
                `
              <button id="language-toggle-${lang}" class="button-locale__btn ${this.currentLanguage === lang ? 'button-locale__btn--active' : 'button-locale__btn--inactive'}">
                  ${lang.toUpperCase()}
              </button>
              ${
                index < this.supportedLanguages.length - 1
                  ? `<div class="button-locale__separator"></div>`
                  : ''
              }`
            )
            .join('')}
          </div>
      </div>
    `
  }

  attachEventListeners() {
    this.supportedLanguages.forEach((lang) => {
      const button = document.getElementById(`language-toggle-${lang}`)
      if (button)
        button.addEventListener(
          'click',
          async () => await this.onClickLanguageButton(lang)
        )
    })
  }
}

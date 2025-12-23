import { NavbarProfile } from '../components/navbar/NavbarProfile.js'
import { NavbarConsole } from '../components/navbar/NavbarConsole.js'
import { NavbarLinks } from '../components/navbar/NavbarLinks.js'
import { ButtonLocale } from '../components/ButtonLocale.js'
import { ButtonTheme } from '../components/ButtonTheme.js'

export class Navbar {
  constructor(i18n, theme, menuItems) {
    this.I18n = i18n
    this.navbarProfile = new NavbarProfile(i18n)
    this.navbarConsole = new NavbarConsole(i18n)
    this.buttonLocale = new ButtonLocale(i18n)
    this.navbarLinks = new NavbarLinks(i18n, menuItems)
    this.buttonTheme = new ButtonTheme(i18n, theme)
  }

  render() {
    return `
    <aside class="navbar">
      <div class="navbar__content">
        ${this.navbarProfile.render()}
        <nav class="navbar__nav">
          ${this.navbarLinks.render()}
        </nav> 
      </div>
      <div class="navbar__bottoms">
        ${this.buttonLocale.render()} 
        ${this.buttonTheme.render()}
      </div>
      <div class="navbar__footer">
        ${this.navbarConsole.render()}
      </div>
    </aside>`
  }

  attachEventListeners() {
    this.navbarConsole.startAnimation()
    this.buttonTheme.attachEventListeners()
    this.buttonLocale.attachEventListeners()
  }
}

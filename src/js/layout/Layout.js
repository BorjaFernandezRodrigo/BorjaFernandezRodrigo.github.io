import { config } from '../../config/config'
import { Header } from './Header.js'
import { Navbar } from './Navbar.js'
import { Projects } from './Projects'
import { Stats } from './Stats'
import { TechStack } from './TechStack'

export class Layout {
  constructor(i18n, theme) {
    this.i18n = i18n
    this.header = new Header(this.i18n)
    this.navbar = new Navbar(this.i18n, theme, config.menuItems)
    console.log(config.stats)
    this.stats = new Stats(this.i18n, config.stats)
    this.techStack = new TechStack(this.i18n, config.technologies)
    this.projects = new Projects(this.i18n)
  }

  render() {
    return /* html */ `
    <div class="layout">
      <div class="layout__background-grid"></div>
      <div class="layout__scanlines"></div>
      <div class="layout__content">
        <nav class="h-screen">${this.navbar.render()}</nav>
        <main class="layout__main">
          <div class="layout__main-content">
            <div>
              ${this.header.render()}
            </div>
            <div class="mt-25">
              ${this.stats.render()}
            </div>
            <div class="mt-25">
              ${this.techStack.render()}
            </div>
            <div class="mt-25">
              ${this.projects.render()}
            </div>
          </div>
        </main>
      </div>
    </div>`
  }

  attachEventListeners() {
    this.navbar.attachEventListeners()
    this.techStack.attachEventListeners()
  }
}

export class NavbarLinks {
  constructor(i18n, menuItems) {
    this.I18n = i18n
    this.navItems = menuItems
  }

  render() {
    return `
       ${this.navItems
         .map(
           (item) => `
                <a class="navbar__nav-link"
                  href="${item.href}">
                  <span class="material-symbols-outlined navbar__nav-icon">
                    ${item.icon}
                  </span>
                  <p class="navbar__nav-text" data-i18n="${item.key}">
                    ${this.I18n.t(item.key)}
                  </p>
                </a>
              `
         )
         .join('')}
    `
  }
}

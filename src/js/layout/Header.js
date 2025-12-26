export class Header {
  constructor(i18n) {
    this.I18n = i18n
  }

  render() {
    return /* html */ `
      <section class="header">
        <div class="header__tile" data-alt="Abstract retro futuristic landscape with neon grids and a glowing sunset">
            <div
                class="header__title-bg" 
                data-alt="${this.I18n.t('hero.alt')}"
                style="background-image: linear-gradient(0deg, rgba(17, 33, 23, 0.9) 0%, rgba(17, 33, 23, 0.2) 60%),
                            url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtAItmkg0GOCjw8okkdZjVdjXB81WCLeNSrFUCo-vScCBz4j_nxnjXCd8p3VRrN5SuEHRx9FTvK1fNxBg8r_fM_6JxVHm42pKw--9igPdSI1FycL2c0dJwKbtUDj7iSPzdFrWTN-s-MXn9it9YJ83KBdUNVBkel-oewTk9LDxjz4Y4KPSJfcPqUJ3g6YCgZlv0QgL1Jz8o4Wkw2hTw9yAv_GE8B8KT-hypmkdCi637sWHISvRXXYnDACGDToPBSUAI46w8dvSzq5U');
                ">
                <div class="header__title-content">
                    <div class="mb-2">
                        <span class="header__title-label" data-i18n="hero.badge" >${this.I18n.t('hero.badge')}</span>
                    </div>
                    <h2 class="header__title-text" data-i18n="hero.role">${this.I18n.t('hero.role')}</h2>
                </div>
            </div>
        </div>
        <div class="header__description">
            <h1 class="header__description-title">
                <span class="text-primary">&gt;</span>
                <span data-i18n="hero.subtitle">${this.I18n.t('hero.subtitle')}</span>
                <span class="blinking-cursor">_</span>
            </h1>
            <p class="header__description-text" data-i18n="hero.description">
                ${this.I18n.t('hero.description')}
            </p>
        </div>
    </section>
    `
  }
}

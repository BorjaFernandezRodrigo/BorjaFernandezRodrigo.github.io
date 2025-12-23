export class Header {
  constructor(i18n) {
    this.I18n = i18n
  }

  render() {
    return /* html */ `
      <section class="w-full  ">
        <div class="relative overflow-hidden rounded-xl flex border border-gray-200 dark:border-white/10 shadow-lg mb-10 h-[240px]">
            <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" data-alt="Abstract retro futuristic landscape with neon grid" 
                data-alt="${this.I18n.t('hero.alt')}"
                style="
                        background-image: linear-gradient(0deg, rgba(17, 33, 23, 0.9) 0%, rgba(17, 33, 23, 0.2) 60%),
                            url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtAItmkg0GOCjw8okkdZjVdjXB81WCLeNSrFUCo-vScCBz4j_nxnjXCd8p3VRrN5SuEHRx9FTvK1fNxBg8r_fM_6JxVHm42pKw--9igPdSI1FycL2c0dJwKbtUDj7iSPzdFrWTN-s-MXn9it9YJ83KBdUNVBkel-oewTk9LDxjz4Y4KPSJfcPqUJ3g6YCgZlv0QgL1Jz8o4Wkw2hTw9yAv_GE8B8KT-hypmkdCi637sWHISvRXXYnDACGDToPBSUAI46w8dvSzq5U');
                    "
                >
                <div class=" px-10 py-5 flex flex-col justify-end items-start w-full h-full">
                    <div class="mb-2">
                        <span class="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold tracking-wider border border-primary/20 backdrop-blur-sm" data-i18n="hero.badge" >${this.I18n.t('hero.badge')}</span>
                    </div>
                    <h2 class="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-md" data-i18n="hero.role">${this.I18n.t('hero.role')}</h2>
                </div>
            </div>
        </div>
        <div class="space-y-4 w-full flex flex-col justify-center items-start">
            <h1 class="text-slate-800 dark:text-white tracking-tight text-3xl font-bold leading-tight">
                <span class="text-primary mr-2">&gt;</span><span data-i18n="hero.subtitle">${this.I18n.t('hero.subtitle')}</span>
            </h1>
            <p class="text-slate-600 dark:text-gray-300 text-lg leading-relaxed border-l-4 border-primary/30 pl-4 font-medium" data-i18n="hero.description">
                ${this.I18n.t('hero.description')}
            </p>
        </div>
    </section>
    `
  }
}

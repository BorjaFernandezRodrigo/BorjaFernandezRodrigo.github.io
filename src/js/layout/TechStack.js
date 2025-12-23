export class TechStack {
  constructor(i18n, technologies = []) {
    this.i18n = i18n
    this.technologies = technologies
    this.selectedCategory = 'all'
    this.categories = this.extractCategories()
  }

  extractCategories() {
    const categoriesSet = new Set()
    this.technologies.forEach((tech) => {
      if (Array.isArray(tech.category)) {
        tech.category.forEach((cat) => categoriesSet.add(cat))
      } else {
        categoriesSet.add(tech.category)
      }
    })
    return ['all', ...Array.from(categoriesSet).sort()]
  }

  filterTechnologies() {
    if (this.selectedCategory === 'all') {
      return this.technologies
    }
    return this.technologies.filter((tech) => {
      if (Array.isArray(tech.category)) {
        return tech.category.includes(this.selectedCategory)
      }
      return tech.category === this.selectedCategory
    })
  }

  renderBadge(category) {
    const isActive = this.selectedCategory === category
    const translationKey = `tech.filter.${category}`
    const label = this.i18n.t(translationKey)

    return `
      <button 
        class="tech-filter-badge ${isActive ? 'active' : ''}" 
        data-category="${category}"
        aria-pressed="${isActive}"
      >
        <span class="tech-filter-badge__text">${label}</span>
        ${isActive ? '<span class="tech-filter-badge__indicator"></span>' : ''}
      </button>
    `
  }

  renderTech(tech) {
    const colorMap = {
      yellow: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        bar: 'bg-yellow-400',
      },
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', bar: 'bg-blue-400' },
      primary: { bg: 'bg-primary/20', text: 'text-primary', bar: 'bg-primary' },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        bar: 'bg-purple-400',
      },
      'blue-600': {
        bg: 'bg-blue-600/20',
        text: 'text-blue-500',
        bar: 'bg-blue-500',
      },
      green: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        bar: 'bg-green-400',
      },
      orange: {
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        bar: 'bg-orange-400',
      },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', bar: 'bg-cyan-400' },
      red: { bg: 'bg-red-500/20', text: 'text-red-400', bar: 'bg-red-400' },
      gray: { bg: 'bg-gray-500/20', text: 'text-gray-400', bar: 'bg-gray-400' },
      indigo: {
        bg: 'bg-indigo-500/20',
        text: 'text-indigo-400',
        bar: 'bg-indigo-400',
      },
    }

    const colors = colorMap[tech.color]
    const categories = Array.isArray(tech.category)
      ? tech.category.join(' / ')
      : tech.category

    return `
      <div class="tech-card min-w-[200px] snap-start bg-surface-dark p-4 rounded-xl border border-white/5 shrink-0">
        <div class="flex items-center gap-3 mb-3">
          <div class="${colors.bg} size-10 rounded-lg flex items-center justify-center ${colors.text} font-bold text-xs">
            ${tech.abbr}
          </div>
          <span class="text-white font-bold">${tech.name}</span>
        </div>
        <div class="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div class="${colors.bar} h-full w-[${tech.skill}%] rounded-full"></div>
        </div>
        <p class="text-xs text-gray-400 mt-3 font-mono uppercase tracking-wider">${categories}</p>
      </div>
    `
  }

  render() {
    const filteredTechs = this.filterTechnologies()

    return `
      <div class="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 class="text-white text-2xl font-bold mb-2" data-i18n="tech.title">${this.i18n.t('tech.title')}</h2>
          <div class="h-1 w-20 bg-primary/50 rounded-full"></div>
        </div>
        
        <!-- Category Filter Badges -->
        <div class="tech-filter-container sm:items-end pt-2">
          <div class="tech-filter-badges justify-start sm:justify-end">
            ${this.categories.map((cat) => this.renderBadge(cat)).join('')}
          </div>
        </div>
      </div>

      <!-- Tech Cards -->
      <div class="tech-cards-container flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory">
        ${filteredTechs.map((tech) => this.renderTech(tech)).join('')}
      </div>
    `
  }

  attachEventListeners() {
    const badges = document.querySelectorAll('.tech-filter-badge')
    badges.forEach((badge) => {
      badge.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category
        this.selectedCategory = category
        this.updateView()
      })
    })
  }

  updateView() {
    const container = document.querySelector('.tech-cards-container')
    const badgesContainer = document.querySelector('.tech-filter-badges')

    if (container && badgesContainer) {
      // Update badges
      badgesContainer.innerHTML = this.categories
        .map((cat) => this.renderBadge(cat))
        .join('')

      // Update tech cards with fade animation
      container.style.opacity = '0'
      setTimeout(() => {
        container.innerHTML = this.filterTechnologies()
          .map((tech) => this.renderTech(tech))
          .join('')
        container.style.opacity = '1'
      }, 150)

      // Reattach event listeners
      this.attachEventListeners()
    }
  }
}

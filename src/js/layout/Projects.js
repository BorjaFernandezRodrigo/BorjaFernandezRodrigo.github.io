import { ProjectCardComponent } from '../components/ProjectCard'

export class Projects {
  constructor(i18n, projectsService) {
    this.i18n = i18n
    this.projectsService = projectsService
    this.projects = []
    this.isLoading = true
  }

  async loadProjects() {
    try {
      this.projects = await this.projectsService.getPublicProjects()
    } catch (error) {
      console.error('Error loading projects:', error)
      this.projects = []
    }
    this.isLoading = false
  }

  renderContent() {
    if (this.isLoading) {
      return /* html */ `
        <div class="projects__loading" data-i18n="projects.loading">
            <p>${this.i18n.t('projects.loading')}</p>
        </div>
      `
    }

    if (this.projects.length === 0) {
      return /* html */ `
        <div class="projects__empty" data-i18n="projects.empty">
            <p>${this.i18n.t('projects.empty')}</p>
        </div>
      `
    }
    return /* html */ `
      <div class="projects__container">
          ${this.projects.map((project) => new ProjectCardComponent(this.i18n).render(project)).join('')}
      </div>
    `
  }

  render() {
    const content = this.renderContent()
    return /* html */ `
    <section class="projects">
        <div class="projects__header">
            <div class="projects__header-content">
                <span class="projects__icon material-symbols-outlined">rocket_launch</span>
                <h3 class="projects__title" data-i18n="projects.title">${this.i18n.t('projects.title')}</h3>
            </div>
            <a href="${this.projectsService.profileUrl}" target="_blank" rel="noopener noreferrer" class="projects__link" data-i18n="projects.viewAll">
                ${this.i18n.t('projects.viewAll')}
            </a>
        </div>
        ${content}
    </section>
    `
  }
}

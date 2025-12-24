export class ProjectCardComponent {
  constructor(i18n) {
    this.i18n = i18n
  }

  getLanguageClass(language) {
    const classMap = {
      JavaScript: 'project-card__image--js',
      TypeScript: 'project-card__image--ts',
      Python: 'project-card__image--python',
      Java: 'project-card__image--java',
      'C#': 'project-card__image--csharp',
      PHP: 'project-card__image--php',
      Ruby: 'project-card__image--ruby',
      Go: 'project-card__image--go',
      Rust: 'project-card__image--rust',
      HTML: 'project-card__image--html',
      CSS: 'project-card__image--css',
    }
    return classMap[language] || 'project-card__image--default'
  }

  render(project) {
    const languageClass = this.getLanguageClass(project.language)

    const languages =
      project.topics && project.topics.length > 0
        ? project.topics.slice(0, 2).join(', ').toUpperCase()
        : project.language || 'PROJECT'

    return `
      <div class="project-card">
        <div class="project-card__image ${languageClass}" data-alt="Screenshot of the project ${project.name}">
          <div class="project-card__overlay"></div>
          <div class="project-card__language">
            ${languages}
          </div>
        </div>
        <div class="project-card__content">
          <div class="project-card__info">
            <div class="project-card__details">
                <h4 class="project-card__name">
                    ${project.name}
                </h4>
                <p class="project-card__description" data-i18n="projects.noDescription">${project.description || this.i18n.t('projects.noDescription')}</p>
                <div class="project-card__metadata">
                  ${project.stars ? `<span class="project-card__meta-item project-card__meta-stars"><span class="material-symbols-outlined" style="font-size: 0.875rem;">star</span>${project.stars}</span>` : ''}
                  ${project.language ? `<span class="project-card__meta-item project-card__meta-language">${project.language}</span>` : ''}
                </div>
            </div>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card__button">
                <span class="material-symbols-outlined project-card__button-icon">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    `
  }
}

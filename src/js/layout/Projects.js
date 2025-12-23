export class Projects {
  constructor() {
    this.projects = [
      {
        title: 'Dashboard Analytics',
        description: 'React • D3.js • Firebase',
        image: 'https://...',
      },
      {
        title: 'E-Commerce API',
        description: 'Node.js • Express • MongoDB',
        image: 'https://...',
      },
    ]
  }

  render() {
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${this.projects
          .map(
            (project) => `
          <div class="group relative overflow-hidden rounded-xl bg-surface-dark border border-white/5">
            <div class="aspect-video w-full bg-cover bg-center grayscale group-hover:grayscale-0"
                 style="background-image: url('${project.image}')">
              <div class="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black">
              <h4 class="text-xl font-bold text-white mb-1">${project.title}</h4>
              <p class="text-gray-400 text-sm">${project.description}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `
  }
}

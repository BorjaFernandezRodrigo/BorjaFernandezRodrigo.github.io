export class ProjectsService {
  constructor() {
    this.username = 'BorjaFernandezRodrigo'
    this.apiUrl = `https://api.github.com/users/${this.username}/repos`
    this.profileUrl = `https://github.com/${this.username}`
  }

  async fetchProjects() {
    try {
      const response = await fetch(this.apiUrl, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const repos = await response.json()

      return repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        isPrivate: repo.private,
        isFork: repo.fork,
      }))
    } catch (error) {
      console.error('Error fetching GitHub projects:', error)
      return []
    }
  }

  async getPublicProjects() {
    const projects = await this.fetchProjects()
    return projects.filter((project) => !project.isPrivate && !project.isFork)
  }

  async getProjectsByLanguage(language) {
    const projects = await this.fetchProjects()
    return projects.filter(
      (project) => project.language?.toLowerCase() === language.toLowerCase()
    )
  }

  async getProjectsByTopic(topic) {
    const projects = await this.fetchProjects()
    return projects.filter((project) =>
      project.topics?.includes(topic.toLowerCase())
    )
  }
}

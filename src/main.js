import './css/style.css'
import { I18nService } from './js/services/I18n.js'
import { ThemeService } from './js/services/Theme.js'
import { Layout } from './js/layout/Layout.js'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './data/language.js'
import { MENU_ITEMS } from './data/menu.js'
import { STATS } from './data/stats.js'
import { TechStackService } from './js/services/TechStack.js'
import { ProjectsService } from './js/services/Projects.js'

const i18n = new I18nService(DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES)
const techStackService = new TechStackService()
const theme = new ThemeService()
const projectsService = new ProjectsService()
const menu = MENU_ITEMS
const stats = STATS

await i18n.loadLanguage(DEFAULT_LANGUAGE)
theme.loadTheme()

const layout = new Layout(
  i18n,
  theme,
  menu,
  stats,
  techStackService,
  projectsService
)

await layout.initialize()
document.getElementById('app').innerHTML = layout.render()

layout.attachEventListeners()

import './css/style.css'
import { config } from './config/config.js'
import { I18n } from './js/i18n.js'
import { Layout } from './js/layout.js'

const i18n = new I18n(config.defaultLanguage, config.supportedLanguages)
await i18n.loadLanguage(config.defaultLanguage)

const layout = new Layout(i18n)

document.getElementById('app').innerHTML = layout.render()

layout.attachEventListeners()

import { Card } from '../components/Card'

export class Stats {
  constructor(i18n, stats = []) {
    this.stats = stats
    this.i18n = i18n
  }

  render() {
    return `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${this.stats
          .map(
            (stat) => `
            ${new Card(this.i18n.t(stat.key), stat.icon).render(
              `
              ${
                stat.key === 'stats.experience.title'
                  ? `
                    <div>
                        <p class="text-slate-800 dark:text-white text-4xl font-bold tracking-tight mb-1" data-i18n="stats.experience.value">${this.i18n.t('stats.experience.value')}</p>
                        <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(48,232,122,0.5)]"></div>
                        </div>
                        <p class="text-right text-xs text-primary/80 dark:text-primary/70 mt-1 font-bold" data-i18n="stats.experience.label">${this.i18n.t('stats.experience.label')}</p>
                    </div>
                    `
                  : ''
              }
              ${
                stat.key === 'stats.profile.title'
                  ? `
                    <div>
                        <p class="text-slate-800 dark:text-white text-3xl font-bold tracking-tight" data-i18n="stats.profile.value">${this.i18n.t('stats.profile.value')}</p>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1" data-i18n="stats.profile.label">${this.i18n.t('stats.profile.label')}</p>
                    </div>
              `
                  : ''
              }
              ${
                stat.key === 'stats.productivity.title'
                  ? `
                <div class="flex flex-col gap-2 w-full">
                        <div class="flex justify-between items-end">
                            <span
                                class="dark:text-white text-3xl font-bold tracking-tight text-primary drop-shadow-[0_0_5px_rgba(48,232,122,0.5)]"
                                data-i18n="stats.productivity.value">${this.i18n.t('stats.productivity.value')}</span
                            >
                            <span class="text-[10px] font-mono text-primary/80 dark:text-primary/60 tracking-widest font-bold" data-i18n="stats.productivity.label"
                                >${this.i18n.t('stats.productivity.label')}</span
                            >
                        </div>
                        <div class="flex gap-1 h-3">
                            <div class="flex-1 bg-primary -skew-x-12 rounded-sm shadow-[0_0_4px_rgba(48,232,122,0.4)]"></div>
                            <div class="flex-1 bg-primary -skew-x-12 rounded-sm shadow-[0_0_4px_rgba(48,232,122,0.4)]"></div>
                            <div class="flex-1 bg-primary -skew-x-12 rounded-sm shadow-[0_0_4px_rgba(48,232,122,0.4)]"></div>
                            <div class="flex-1 bg-primary -skew-x-12 rounded-sm shadow-[0_0_4px_rgba(48,232,122,0.4)]"></div>
                            <div class="flex-1 bg-primary -skew-x-12 rounded-sm shadow-[0_0_4px_rgba(48,232,122,0.4)]"></div>
                        </div>
                    </div>
              `
                  : ''
              }
              `
            )}
        `
          )
          .join('')}
      </div>
    `
  }
}

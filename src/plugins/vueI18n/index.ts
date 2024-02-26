import { createI18n } from 'vue-i18n'
import { App } from 'vue'
import enLocale from 'element-plus/dist/locale/en.mjs'
import zhLocale from 'element-plus/dist/locale/zh-cn.mjs'

const siphonI18n = (function () {
  let cache = Object.fromEntries(
    Object.entries(import.meta.glob('../../locales/*.y(a)?ml', { eager: true })).map(
      ([key, value]) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)?.[1] ?? ''
        return [matched, (value as any).default]
      }
    )
  )
  return (prefix = 'zh-CN') => {
    return cache[prefix]
  }
})()

export const localesConfigs = {
  zh: {
    ...siphonI18n('zh-CN'),
    ...zhLocale
  },
  en: {
    ...siphonI18n('en'),
    ...enLocale
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: localesConfigs
})

export function useI18n(app: App) {
  app.use(i18n)
}

import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({ locale: 'zh' }),
  actions: {
    changeLocale(value: string) {
      this.locale = value
    }
  },
  persist: {
    storage: localStorage,
    paths: ['locale']
  }
})

import { messages } from '@/lang/lang'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: window.localStorage.getItem('language') || 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

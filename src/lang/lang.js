import enLang from './languages/en.json'
import bgLang from './languages/bg.json'
localStorage.setItem('lang', 'en')

export const messages = {
  en: enLang,
  bg: bgLang
}

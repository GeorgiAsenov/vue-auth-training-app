import { AuthService } from '@/services/AuthService'
import { i18n } from '../../lang/i18n'

// State of the module
const state = {
  token: '',
  user: null
}

const getters = {
  // whether the user is logged in
  isLoggedIn (state) {
    return !!state.token
  }
}

const mutations = {
  // stores the token in the store and in localStorage
  STORE_TOKEN (state, token) {
    state.token = token
    window.localStorage.setItem('TOKEN', token)
  }
}
const actions = {
  login ({ commit }, form) {
    return AuthService.login(form)
      .then((response) => {
        commit('STORE_TOKEN', response.data.accessToken)
      })
  },
  logout () {
    window.localStorage.removeItem('TOKEN')
    window.location.reload()
  },
  chooseLang ({ commit }, langName) {
    window.localStorage.setItem('language', langName.lang)
    i18n.locale = langName.lang
    document.title = i18n.t(langName.title)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

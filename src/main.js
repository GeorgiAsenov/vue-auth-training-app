import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Api from '@/services/ApiService'
import Swal from '@/services/notifyService'
import { i18n } from '@/lang/i18n'

Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.$notify = Swal

// Vue.prototype.$displayErrors = function (error) {
//   const errorObject = {}
//   if (typeof error === 'string') {
//     errorObject.text = error
//   } else if (typeof error === 'object') {
//     const msg = _.get(error, 'response.data.error', 'ERROR FOUND')
//     errorObject.text = msg
//   }
//   return Swal.error(errorObject)
// }

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

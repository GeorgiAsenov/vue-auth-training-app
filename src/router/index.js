import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './route-definitions'
import { canAccess } from '../utils'
import { i18n } from '@/lang/i18n'

Vue.use(Router)

// Loads Pages async
const load = (name) => () => import(`../views/${name}.vue`)
// define a router instance
const routerInstance = new Router({
  mode: 'history',
  routes: [
    {
      ...routes.home,
      path: '/',
      component: load('Home')
    },
    {
      ...routes.about,
      path: '/about',
      component: load('About')
    },
    {
      ...routes.cpanel,
      path: '/cpane',
      component: load('Cpanel')
    },
    {
      ...routes.login,
      path: '/login',
      component: load('Login')
    }
  ]
})

// Attaches a beforeEach hook that is called before every route is visited.

routerInstance.beforeEach((to, from, next) => {
  if (canAccess(to.meta.auth)) {
    // continue as he has access
    return next()
  } else {
    // if user does not have access and tries to go to Login page, go to home
    if (to.name === 'login') return next('/')
    // otherwise go to the login
    return next({ name: 'login' })
  }
})

routerInstance.afterEach((to, from) => {
  document.title = i18n.t(to.meta.title)
})

export default routerInstance

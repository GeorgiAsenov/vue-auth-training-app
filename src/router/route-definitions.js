// List of routes, to be used inside the Router and in the navigation item
export const routes = {
  home: {
    name: 'home',
    meta: {
      label: 'navigations.home',
      title: 'navigations.home'
    }
  },
  about: {
    name: 'about',
    meta: {
      label: 'navigations.about',
      title: 'navigations.about'
    }
  },
  cpanel: {
    name: 'cpanel',
    meta: {
      label: 'navigations.cpanel',
      title: 'navigations.cpanel'
    }
  },
  login: {
    name: 'login',
    meta: {
      // this item is only accessible if not logged in
      auth: false,
      label: 'navigations.login',
      title: 'navigations.login'
    }
  }
}

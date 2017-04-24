import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import VueResource from 'vue-resource'

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

// globally (in your main .js file)
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

import MultiLanguage from 'vue-multilanguage'
import Store from './store/store'
Vue.use( MultiLanguage, { path: '/assets/lang', d_language: 'fr', store: Store } )

import router from './utils/router'
import auth from './utils/auth'

import BookDisplay from './Components/BookDisplay.vue'
Vue.component('book-display', BookDisplay);

auth.checkAuth()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

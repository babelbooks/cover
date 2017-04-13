import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

import MultiLanguage from 'vue-multilanguage'
import Store from './store/store'
Vue.use( MultiLanguage, { path: '/assets/lang', d_language: 'fr', store: Store } )

import router from './router'
import auth from './auth'

auth.checkAuth()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

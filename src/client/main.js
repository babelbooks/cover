import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import router from './router'
import auth from './auth'

auth.checkAuth()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

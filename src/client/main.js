import Vue from 'vue'
import App from './App.vue'
import Home from './Components/Home.vue'
import Login from './Components/Login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

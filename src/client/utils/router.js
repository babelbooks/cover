import VueRouter from 'vue-router'

import Home from '../Components/Home.vue'
import Login from '../Components/Login.vue'
import Signup from '../Components/Signup.vue'
import MyLibrary from '../Components/MyLibrary.vue'
import Profile from '../Components/Profile.vue'
import Search from '../Components/Search.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/mylibrary', name: 'mylibrary', component: MyLibrary},
    { path: '/profile', name: 'profile', component: Profile},
    { path: '/search', name: 'search', component: Search},
  ]
});

export default router;

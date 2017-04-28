import VueRouter  from 'vue-router';

// Import all components needed
import Home       from '../components/Home.vue';
import Login      from '../components/Login.vue';
import Signup     from '../components/Signup.vue';
import MyLibrary  from '../components/MyLibrary.vue';
import Profile    from '../components/Profile.vue';
import Search     from '../components/Search.vue';
import Book       from '../components/Book.vue';

/**
 * Client side router.
 * Each route displays a component.
 * @type {VueRouter}
 */
const router = new VueRouter({
  //mode: 'history', TODO: When in production, use this mode. Use this in the NodeJS server: https://github.com/bripkens/connect-history-api-fallback
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/mylibrary', name: 'mylibrary', component: MyLibrary},
    { path: '/profile', name: 'profile', component: Profile},
    { path: '/search/:search', name: 'search', component: Search},
    { path: '/book/:id', name: 'book', component: Book}
  ]
});

export default router;

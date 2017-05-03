// Import modules
import Vue            from 'vue';
import VueRouter      from 'vue-router';
import Vuex           from 'vuex';
import VueResource    from 'vue-resource';
import MultiLanguage  from 'vue-multilanguage'

// Import utility tools
import Store  from './store/store';
import router from './utils/router';

// Import components
import Icon         from 'vue-awesome/components/Icon.vue';
import App          from './App.vue';
import BookDisplay  from './components/BookDisplay.vue'

// Import all icons (don't care about bundle size)
import 'vue-awesome/icons';

// Import Google maps vue componentimport * as VueGoogleMaps from 'vue2-google-maps';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDY-ER3DsUJQFrNumCqChQbDCDIaCxPoq0'
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
});

// Register components
Vue.component('icon', Icon);
Vue.component('book-display', BookDisplay);

// Use modules
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(MultiLanguage, {
  path: '/assets/lang',
  d_language: 'fr',
  store: Store
});

// Initialize vue.js
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

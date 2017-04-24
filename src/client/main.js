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
import Icon   from 'vue-awesome/components/Icon.vue';
import App    from './App.vue';

// Import all icons (don't care about bundle size)
import 'vue-awesome/icons';

// Register components
Vue.component('icon', Icon);


// Use modules
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(MultiLanguage, {
  path: '/assets/lang',
  d_language: 'fr',
  store: Store
});

import BookDisplay from './Components/BookDisplay.vue'
Vue.component('book-display', BookDisplay);

// Initialize vue.js
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

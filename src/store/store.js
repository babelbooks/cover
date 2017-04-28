import Vue          from 'vue';
import Vuex         from 'vuex';
import * as actions from './actions';

/**
 * Use Vuex locally
 */
Vue.use(Vuex);

/**
 * Define default state
 */
const state = {
  user: {},         // At first, no user is logged in
  mlang:{},         // No lang is selected
  search: ''        // No search term has been typed
};

/**
 * Define possible mutations
 */
const mutations = {
  // Update an user (upon login only)
  UPDATE_USER (state, user) {
    state.user = user;
  },

  // Update an user (upon logout only)
  LOGOUT_USER (state) {
    state.user = {};
  },

  // Update search terms
  UPDATE_SEARCH (state, search) {
    state.search = search;
  }
};

/**
 * Define possible getters
 */
const getters = {
  currentUser: (state) => {
    return state.user;
  }
};

/**
 * Eventually export the new store
 */
export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

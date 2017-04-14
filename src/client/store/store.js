import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
  user:{
    userID: 1,
    username: '',
    lastName: '',
    firstName: '',
    points: 1,
    score: 1,
    signUpDate: '',
    authenticated: false
  },
  mlang:{}
}

const mutations = {
  UPDATE_USER (state, user) {
    state.user = user;
  },
  LOGOUT_USER (state) {
    state.user = {
      userID: 1,
      username: '',
      lastName: '',
      firstName: '',
      points: 1,
      score: 1,
      signUpDate: '',
      authenticated: false
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})

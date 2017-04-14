import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user:{
    id: '1',
    username: 'Test',
    token: ''
  },
  mlang:{}
}

const mutations = {
  TOGGLE_MENU (state) {
    if(state.showMenu === true){
      state.showMenu = false;
    }else{
      state.showMenu = true;
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})

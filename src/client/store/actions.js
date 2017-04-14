import Vue from 'vue'
import config from '../config'

export const updateUser =  function({ commit },idUser) {
  return new Promise((resolve, reject) => {
    const USER_URL = config.apiUrl + "user/" + idUser;

    Vue.http.get(USER_URL).then(response => {
      response.data.authenticated = true;
      commit('UPDATE_USER', response.data)
      resolve()
    }, response => {
      reject()
    });
  })
}

export const logoutUser = ({ commit }) => {
  commit('LOGOUT_USER')
}

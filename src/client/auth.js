import config from './config'
import store from './store/store'
import Vue from 'vue'

const LOGIN_URL = config.apiUrl + 'sessions/create/'
const SIGNUP_URL = config.apiUrl + 'users/'

export default {

  user: {
    authenticated: false
  },
  login(context, creds, redirect) {

    localStorage.setItem('id_token', "test")

    localStorage.setItem('id_user', 1) // replace this by real user id

    // Get User informations to store in cache
    store.dispatch('updateUser', 1).then(() => {
      if(redirect) {
        context.$router.push({ name: redirect });
      }
    }, () => {
      context.error = "Connexion au serveur impossible";
    });

    // TODO connect with backend
    /*
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        context.$router.push({ name: redirect });
      }

    }).error((err) => {
      context.error = err
    })
    */
  },

  signup(context, creds, redirect) {


    // TODO connect with backend
    /*
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
    */
  },

  logout(context) {
    localStorage.removeItem('id_token')
    context.$store.dispatch('logoutUser')
    context.$router.push({ name: 'home' });
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    var idUser = localStorage.getItem('id_user')
    if(jwt && idUser) { // TODO: Eventually, check if the token match the session ID in the backend
      // Get User informations to store in cache
      store.dispatch('updateUser', idUser);
    }
  },

  storeUserInfo(idUser,context,redirect){
    // Get user info from server to put it in the cache

    response.data.authenticated = true;

    Vue.http.get(USER_URL).then(response => {


      store.dispatch('updateUser', response.data)
      return true
    }, response => {
      return false
    });
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

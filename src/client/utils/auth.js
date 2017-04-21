import config from './config'
import store from '../store/store'
import Vue from 'vue'

const LOGIN_URL   = config.apiUrl + 'login'
const SIGNUP_URL  = config.apiUrl + 'users/'      // Not implemented yet

export default {

  user: {
    authenticated: false
  },
  login(context, creds, redirect) {

    localStorage.setItem('id_token', 'test')
    localStorage.setItem('id_user', creds.username)

    // Get User information to store in cache
    store.dispatch('updateUser', creds.username).then(() => {
      if(redirect) {
        context.$router.push({ name: redirect });
      }
    }, () => {
      context.error = "Connexion au serveur impossible";
    });

    context.$http.post(LOGIN_URL, { user: creds }, (data) => {
      // (Sn0wFox) Well, I don't send a token. A cookie is set and stores the session's ID
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        context.$router.push({ name: redirect });
      }

    }).error((err) => {
      context.error = err
    })
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

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

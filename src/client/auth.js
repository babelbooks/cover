
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {

    localStorage.setItem('id_token', "test")

    this.user.authenticated = true

    // context.error = "Mauvais identifiants"

    if(redirect) {
      context.$router.push({ name: redirect });
    }
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
    this.user.authenticated = false
    context.$router.push({ name: 'home' });
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

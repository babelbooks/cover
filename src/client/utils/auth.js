import store    from '../store/store';
import services from './services';

export default {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    // TODO: check if user is already connected
    return services
      .login(context, creds)
      .then(() => {
        // Get User information to store in cache
        return store
          .dispatch('updateUser', creds.username)
          .then(() => {
            if(redirect) {
              context.$router.push({ name: redirect });
            }
          })
          .error(() => {
            context.error = "Failed to login";
          });
      })
      .error((err) => {
        context.error = err
      });
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

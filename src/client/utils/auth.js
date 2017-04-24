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
          .catch(() => {
            context.error = "Failed to login";
          });
      })
      .catch((err) => {
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

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

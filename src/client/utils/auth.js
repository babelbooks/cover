import store    from '../store/store';
import services from './services';

export default {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    return services
      .login(context, creds)
      .then(() => {
        // Get User information to store in cache
        return store
          .dispatch('updateUser')
          .then(() => {
            if(redirect) {
              context.$router.push({ name: redirect });
            }
          })
          .catch(() => {
            context.error = 'Failed to login';
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
    return services
      .logout(context)
      .then(() => {
        return store.dispatch('logoutUser');
      })
      .catch((err) => {
        context.error = err;
        return store.dispatch('logoutUser');
      });
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

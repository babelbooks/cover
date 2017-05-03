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
          .dispatch('updateUser',context)
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
        context.error = err.body.error.message || err.body.error.error;
      });
  },

  signup(context, user, redirect) {
    let self = this;
    return services
      .signup(context, user)
      .then(() => {
        self.user.authenticated = true;
        if(redirect) {
          context.$router.push({ name: redirect });
        }
      })
      .catch((err) => {
        context.error = err.body.error.message || err.body.error.error;
      });
  },

  logout(context) {
    return services
      .logout(context)
      .then(() => {
        return store.dispatch('logoutUser');
      })
      .catch((err) => {
        context.error = err.body.error.message || err.body.error.error;
        return store.dispatch('logoutUser');
      });
  }
}

import config   from './config';

const LOGIN_URL   = config.apiUrl + 'login';
const SIGNUP_URL  = config.apiUrl + 'users/';   // Not implemented yet

export default {
  login: (context, credentials) => {
    return context
      .$http
      .post(LOGIN_URL, { user: credentials });
  },

  logout: (context) => {

  },

  signup: (context, user) => {

  },

  getCurrentUser: (context) => {

  }
}
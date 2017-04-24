import Vue    from 'vue';
import VueRes from 'vue-resource';
import config from './config';

Vue.use(VueRes);

const LOGIN_URL   = config.apiUrl + 'login';
const SIGNUP_URL  = config.apiUrl + 'users/';   // Not implemented yet

export default {
  login: (credentials) => {
    return Vue
      .http
      .post(LOGIN_URL, { user: credentials });
  },

  logout: () => {

  },

  signup: (user) => {

  },

  getCurrentUser: () => {
    return Vue
      .http
      .get(config.apiUrl + 'user/me');
  },

  getCurrentUserLib: () => {
    return getHardUserLib();
    // return context
    //   .$http
    //   .get(config.apiUrl + 'user/me/books');
  }
}

function getHardUserLib() {
  return [{
    "isbn": 9782266232999,
    "title": "Le Seigneur des Anneaux / Intégrale",
    "abstract": "...",
    "genres": ["Fantasy","Science-Fiction"],
    "author": "J. R. R. Tolkien",
    "edition": "Pocket",
    "majorForm": "Novel",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
  }];
}
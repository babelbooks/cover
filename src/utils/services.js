import config from './config';

const LOGIN_URL   = config.apiUrl + 'login';
const LOGOUT_URL  = config.apiUrl + 'logout';
const SIGNUP_URL  = config.apiUrl + 'signup';

export default {
  login: (context, credentials) => {
    return context
      .$http
      .post(LOGIN_URL, { user: credentials });
  },

  logout: (context) => {
    return context
      .$http
      .post(LOGOUT_URL);
  },

  signup: (context, user) => {
    return context
      .$http
      .put(SIGNUP_URL, { user: user });
  },

  getCurrentUser: (context) => {
    return context
      .$http
      .get(config.apiUrl + 'user/me');
  },

  getCurrentUserLib: (context) => {
    return Promise.resolve(getHardUserLib());
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
    },
    {
      "isbn": 9782266232999,
      "title": "Le Seigneur des Anneaux / Intégrale",
      "abstract": "...",
      "genres": ["Fantasy","Science-Fiction"],
      "author": "J. R. R. Tolkien",
      "edition": "Pocket",
      "majorForm": "Novel",
      "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
    },
    {
      "isbn": 9782266232999,
      "title": "Le Seigneur des Anneaux / Intégrale",
      "abstract": "...",
      "genres": ["Fantasy","Science-Fiction"],
      "author": "J. R. R. Tolkien",
      "edition": "Pocket",
      "majorForm": "Novel",
      "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
    },
    {
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

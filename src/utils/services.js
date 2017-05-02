import config from './config';

const LOGIN_URL   = config.apiUrl + 'login';
const LOGOUT_URL  = config.apiUrl + 'logout';
const SIGNUP_URL  = config.apiUrl + 'signup';

const BOOK_URL = config.engineUrl + 'isbn/'

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
  },

  getBookInfo: (context, isbn) => {
    return Promise.resolve(getHardBook());
    // TODO: connect with backend
    // return context
    //   .$http
    //   .get(BOOK_URL + isbn);
  }
}

function getHardBook() {
  return {
    title: 'Test',
    abstract: 'Testtset',
    genres: ['test1','test2','test3'],
    author: 'test',
    edition: 'test',
    majorForm: 'test',
    cover: ''
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

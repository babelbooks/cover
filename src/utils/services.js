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
    // return Promise.resolve(getHardBook());
    // TODO: connect with backend
    // return context
    //   .$http
    //   .get(BOOK_URL + isbn);

    context
    .$http
    .get(config.engineUrl + 'elastic/book/' + isbn)
    .then((bookMetadata) => {
        console.log("Book " + isbn + " is indexed");
        bookMetadata = { 'book': bookMetadata };
        bookMetadata['isIndexed'] = true;
        return bookMetadata;
    })
    .catch(() => { 
        console.log("Book " + isbn + " is not indexed, looking data with google api");
        context
        .$http
        .get(config.engineUrl + 'isbn/' + isbn)
        .then((bookMetadataGoogle) => {
          console.log("Book " + isbn + " is indexed");
          bookMetadata = { 'book': bookMetadataGoogle };
          bookMetadata['isIndexed'] = false;
          return bookMetadataGoogle;
        })
        .catch(() => {
          console.log("Fatal error");
          //TODO
        })
    })
  },

  /**
   * Insert metadata in elastic search to be indexed.
   * @param context the context promise
   * @param book the metadata to add in a json obect (see engine readme for correct formatting)
   */
  putBookInfo: (context, book) => {
    return context
    .$http
    .put(config.engineUrl + 'elastic/book', book)
    .then((response) => {
      console.log("Inserting book metadata to ES.");
    })
    .catch(() => {
      console.log("Error");
      //TODO
    });
  },

  /**
   * Get the books currently borrowed by the user, that is the book that the user
   * has already read (waiting for another user to be borrowed) and the book that
   * the user is currently reading.
   * @param context the context promise
   * @param username the userId of the user
   */
  getUserBorrowedBook: (context, username) => {
    return context
    .$http
    .get(config.apiUrl + 'user/' + username + '/books/borrowed')
    .then((response) => {
      console.log("Getting borrowed books from user " + username);
    })
    .catch(() => {
      console.log("Error");
      //TODO
    });
  },

  /**
   * Get all the books the user gave to the library. This doesn't mean that the user still
   * has the book. See getUserBorrowedBook and getUserReadBook for more details.
   * @param context the context promise
   * @param username the userId of the user
   */
  getUserOriginalBook: (context, username) => {
    return context
    .$http
    .get(config.apiUrl + 'user/' + username + '/books')
    .then((response) => {
      console.log("Getting original books from user " + username);
    })
    .catch(() => {
      console.log("Error");
    })
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

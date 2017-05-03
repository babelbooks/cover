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

    return context
      .$http
      .get(config.engineUrl + 'elastic/book/' + isbn)
      .then((bookMetadata) => {
        console.log("Book " + isbn + " is indexed");
        bookMetadata = { 'book': bookMetadata.data };
        bookMetadata['isIndexed'] = true;
        return bookMetadata;
      })
      .catch(() => {
        console.log("Book " + isbn + " is not indexed, looking data with google api");
        return context
        .$http
        .get(config.engineUrl + 'isbn/' + isbn)
        .then((bookMetadataGoogle) => {
          console.log("Book " + isbn + " is indexed");
          bookMetadataGoogle = { 'book': bookMetadataGoogle.data };
          bookMetadataGoogle['isIndexed'] = false;
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
      return response.data
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
      return response.data;
    })
    .catch(() => {
      console.log("Error");
    })
  },


 /**
  * Get the books currently borrowed by the user and which are not
  * read yet, then not available.
  * @param context the context promise
  * @param username the userId of the user
  */
  getUserReadingBook: (context, username) => {
    return context
    .$http
    .get(config.apiUrl + 'user/' + username + '/books/reading')
    .then((response) => {
      console.log("Getting reading books from user " + username);
      return response.data
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

  /**
  * Get the books currently borrowed by the user and which are 
  * read yet, then available.
  * @param context the context promise
  * @param username the userId of the user
  */
  getUserReadBook: (context, username) => {
    return context
    .$http
    .get(config.apiUrl + 'user/' + username + 'books/read')
    .then((response) => {
      console.log("Getting borrowed read books from user " + username);
      return response.data;
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Update the user points by adding n.
 * @param context the context promise
 * @param number the number to add to the user points (have to be
 * a number, not an object)
 */
  updateUserPoints: (context, number) => {
    return context
    .$http
    .post(config.apiUrl + "user/me/points", { "n" : number })
    .then((response) => {
      console.log("Updating user points adding " + number);
      return response.data
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

  /**
 * Update the user score by adding n.
 * @param context the context promise
 * @param number the number to add to the user score (have to be
 * a number, not an object)
 */
  updateUserScore: (context, number) => {
    return context
    .$http
    .post(config.apiUrl + "user/me/score", { "n" : number })
    .then(() => {
      console.log("Updating user score adding " + number);
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Get the user identified by username
 * @param context the context promise
 * @param username the userId of the user to return
 */
  getUser: (context, username) => {
    return context
    .$http
    .get(config.apiUrl + "user/other/" + username)
    .then(() => {
      console.log("Getting user " + username);
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Get the book identified by bookId
 * @param context the context promise
 * @param bookId the bookId of the book to return
 */
  getBook: (context, bookId) => {
    return context
    .$http
    .get(config.apiUrl + "book/" + bookId)
    .then(() => {
      console.log("Getting book " + bookId);
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Set the book identifed by bookId as read (meaning that the
 * book is now available).
 * @param context the context promise
 * @param bookId the bookId of the book which is set as read
 */
  setBookAsRead: (context, bookId) => {
    return context
    .$http
    .post(config.apiUrl + "read", { "bookId" : bookId })
    .then(() => {
      console.log("Setting the book " + bookId + " as read");
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Add a user.
 * @param context the context promise
 * @param user the user to add, must have the following shape
 * {
 *  "user" : {
 *    "username": ID,
 *    "password": string,
 *    "lastName": string,
 *    "firstName": string
 *  }
 * }
 */
  addUser: (context, user) => {
    return context
    .$http
    .put(config.apiUrl + "user/add", user)
    .then(() => {
      console.log("Adding user");
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

  /**
 * Add a book.
 * @param context the context promise
 * @param book the book to add, must have the following shape
 * {
 *  "book": {
 *    "origin" : ID,
 *    "isbn": ID | null,
 *    "available": boolean
 *  }
 * }
 */
  addBook: (context, book) => {
    return context
    .$http
    .put(config.apiUrl + "book/add", book)
    .then(() => {
      console.log("Adding book");
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  },

/**
 * Get available books.
 * @param context the context promise
 * @param limit the maximal number of books returned
 * @param offset the offset of the books returned
 */
  getAvailableBooks: (context, limit = undefined, offset = undefined) => {
    return context
    .$http
    .get(config.apiUrl + "all/available/" + limit + "/" + offset)
    .then(() => {
      console.log("Consulting available books");
    })
    .catch(() => {
      console.log("Error");
      // TODO
    })
  }
}


function getHardBook() {
  return {
    "title": "Le Seigneur des Anneaux / Intégrale",
    "abstract": "...",
    "genres": ["Fantasy","Science-Fiction"],
    "author": "J. R. R. Tolkien",
    "edition": "Pocket",
    "majorForm": "Novel",
    "cover": "http://books.google.com/books/content?id=AMHUSAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
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
      "cover": "http://books.google.com/books/content?id=AMHUSAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
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

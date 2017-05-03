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
<<<<<<< HEAD

=======
>>>>>>> 1e2444bff958839052e3cee9911c3cb26f2be835
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
          console.log("Book " + isbn + " is indexed in Google");
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
    .get(config.apiUrl + 'user/' + username + '/books/read')
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
    .put(config.apiUrl + "user/me/points", { "n" : number })
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
    .then((response) => {
      console.log("Updating user score, adding " + number);
      return response.data;
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
    .then((response) => {
      console.log("Adding book");
      return response.data;
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
  },

/**
 * Get available books.
 * @param context the context promise
 * @param limit the maximal number of books returned
 * @param offset the offset of the books returned
 */
  getCurrentOwners: (context, isbn) => {
    return context
    .$http
    .get(config.apiUrl + "owners/" + isbn)
    .then((response) => {
      console.log("Consulting all owners");
      return response;
    })
    .catch(() => {
      console.log("Error");
    })
  },

  getUserAppointmentsFor: (context) => {
    return context
      .$http
      .get(config.apiUrl + "user/me/appointments/for")
      .then((response) => {
        console.log("Adding book");
        return response.data
      })
      .catch(() => {
        console.log("Error");
        // TODO
      })
  },

  getUserAppointmentsWith: (context) => {
    return context
      .$http
      .get(config.apiUrl + "user/me/appointments/with")
      .then((response) => {
        console.log("Adding book");
        return response.data
      })
      .catch(() => {
        console.log("Error");
        // TODO
      })
  },

  doIOwnThisBook(context,isbn,username){
    return this
      .getUserReadingBook(context,username)
      .then((response) => {
        console.log("Do I own this book Reading");
        var booksReading = response
        var arrayLength = booksReading.length;
        for (var i = 0; i < arrayLength; i++) {
          if (booksReading[i].id === isbn){
            return {
              myBook: true,
              available: false
            };
          }
        }
        return this
          .getUserReadBook(context,username)
          .then((response2) => {
            var booksRenting = response2
            var arrayLength = booksRenting.length;
            for (var i = 0; i < arrayLength; i++) {
              if (booksRenting[i].id === isbn){
                return {
                  myBook: true,
                  available: true
                };
              }
            }
            return {
              myBook: false,
              available: false,
            }
          })
      })
      .catch((err) => {
        console.log("Error: " + err);
        // TODO
      })
  },

  setBookRead(context, bookId){
    return context
      .$http
      .post(config.apiUrl + "book/read", bookId)
      .then((response) => {
        console.log("Set Book Read");
        return response.data
      })
      .catch((err) => {
        console.log("Error: " + err);
        // TODO
      })
  },
  
  searchByTile: (context, title) => {
    return context
      .$http
      .get(config.engineUrl + 'elastic/book/title/' + title);
  }
}

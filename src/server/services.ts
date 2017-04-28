import * as Bluebird  from 'bluebird';
import * as request   from 'request-promise';

const engineURL: string = 'http://' + (process.env.BB_ENGINE_HOST || 'localhost') + ':' + (process.env.BB_ENGINE_PORT || 3002);
const babelURL: string  = 'http://' + (process.env.BB_BABEL_HOST || 'localhost') + ':' + (process.env.BB_BABEL_PORT || 3000);

/**
 * Tests the status of the services that this router will use.
 */
export function test(): Bluebird<any> {
  return Bluebird.all([
    request({
      method: 'GET',
      url: babelURL + '/test'})
      .catch((err: Error) => err),
    request({
      method: 'GET',
      url: engineURL + '/test'})
      .catch((err: Error) => err)
  ]);
}

/**
 * Tries to login the given user from
 * the auth server.
 * @param user The user to login.
 * @returns {Bluebird<any>}
 */
export function login(user: any): Bluebird<any> {
  return Bluebird.resolve(request({
    method: 'POST',
    url: babelURL + '/auth/login',
    json: true,
    body: user,
    resolveWithFullResponse: true
  }));
}

/**
 * Logs the current user out.
 * @returns {Bluebird<any>}
 */
export function logout(): Bluebird<any> {
  return Bluebird.resolve(request({
    method: 'POST',
    url: babelURL + '/auth/logout',
    json: true,
    resolveWithFullResponse: true
  }));
}

/**
 * Tries to register the given user.
 * @param user The user to register.
 * @returns {Bluebird<any>}
 */
export function signup(user: any): Bluebird<any> {
  return Bluebird.resolve(request({
    method: 'PUT',
    url: babelURL + '/user/add',
    json: true,
    body: user
  }));
}

/**
 * Gathers information about the currently logged-in user.
 * @param options Request's options.
 * @returns {Bluebird<any>}
 */
export function getCurrentUser(options?: any): Bluebird<any> {
  let headers: any = options ? options.headers : undefined;
  return Bluebird.resolve(request({
    method: 'GET',
    url: babelURL + '/user/me',
    json: true,
    headers: headers
  }));
}

/**
 * Adds the given book into BabelBooks for the current user.
 * The book must EITHER have a field metadata or a field isbn.
 * If the book contains a field metadata, the object will be indexed.
 * If the book contains a field isbn, it will check that the isbn exist
 * in our index.
 * Returns the added book upon success along with its metadata if they
 * were indexed too.
 * Returns a promise rejection upon failure.
 * @param book The book to add.
 * @param options Request's options.
 * @returns {Bluebird<any>}
 */
export function addBook(book: any, options?: any): Bluebird<any> {
  let headers: any = options ? options.headers : undefined;
  let metadata = book.metadata;
  delete book.metadata;
  return Bluebird
    .try(() => {
      if (metadata ? book.isbn === undefined : book.isbn !== undefined) {
        if (book.isbn !== undefined) {
          return request({
            method: 'GET',
            url: engineURL + '/elastic/book/' + book.isbn,
            json: true
          });
        }
      } else {
        return Bluebird.reject(new Error('The given book must either have a metadata OR an isbn field.'));
      }
    })
    .then(() => {
      return getCurrentUser(options);
    })
    .then((res: any) => {
      book.origin = res.username;
      return request({
        method: 'PUT',
        url: babelURL + '/book/add',
        json: true,
        body: book,
        headers: headers
      });
    })
    .then((res: any) => {
      if(metadata) {
        metadata.id = res.isbn;
        return request({
          method: 'PUT',
          url: engineURL + '/elastic/book',
          json: true,
          body: {book: metadata}
        })
        .then((data: any) => {
          res.metadata = data;
          return res;
        });
      }
      return res;
    });
}

/**
 * Gathers all information about the books originally owned
 * by the given user.
 * @param userId The user's Id from which retrieve the books.
 * @param options Request's options.
 * @returns {Bluebird<any[]>}
 */
export function getUserLibrary(userId: number | string, options?: any): Bluebird<any[]> {
  return getUserBooks(babelURL + '/user/' + userId + '/books', options);
}

/**
 * Gathers all information about the books currently borrowed
 * by the given user.
 * @param userId The user's Id from which retrieve the books.
 * @param options Request's options.
 * @returns {Bluebird<any[]>}
 */
export function getUserBorrowedBooks(userId: number | string, options?: any): Bluebird<any[]> {
  return getUserBooks(babelURL + '/user/' + userId + '/books/borrowed', options);
}

/**
 * Gathers all information about the books currently read
 * by the given user.
 * @param userId The user's Id from which retrieve the books.
 * @param options Request's options.
 * @returns {Bluebird<any[]>}
 */
export function getUserReadingBooks(userId: number | string, options?: any): Bluebird<any[]> {
  return getUserBooks(babelURL + '/user/' + userId + '/books/reading', options);
}

/**
 * A wrapper to factorize some code.
 * @param from The url from which gather the books.
 * @param options Request's options.
 * @returns {Bluebird<any[]>}
 */
function getUserBooks(from: string, options?: any): Bluebird<any[]> {
  let headers: any = options ? options.headers : undefined;
  return Bluebird
    .resolve(request({
      method: 'GET',
      url: from,
      json: true,
      headers: headers
    }))
    .then((res: any) => {
      let promises: any[] = [];
      for(let book of res.books) {
        promises.push(request({
          method: 'GET',
          url: engineURL + '/book/' + book.isbn,
          json: true
        }))
      }
      return Bluebird.all(promises);
    });
}
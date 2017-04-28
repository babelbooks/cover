import Vue    from 'vue';
import config from '../utils/config';

/**
 * Tries to update the current user.
 * If no user is currently logged in,
 * returns a promise rejection.
 * TODO: should we really return a promise rejection ?
 * TODO: use service
 * @param commit The function to validate the transaction.
 * @returns {Promise}
 */
export const updateUser = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const USER_URL = config.apiUrl + 'user/me';
    return Vue
      .http
      .get(USER_URL)
      .then(response => {
        response.data.authenticated = true;
        commit('UPDATE_USER', response.data);
        return resolve();
      })
      .catch((err) => {
        commit('LOGOUT_USER');  // In case of an error, we can't be sure that an user is logged in
        return reject(err);
      });
  });
};

/**
 * Removes the current user from the store.
 * @param commit The function to validate the transaction.
 * @returns {any}
 */
export const logoutUser = ({ commit }) => {
  return commit('LOGOUT_USER');
};

/**
 * Updates the current search keywords.
 * @param commit The function to validate the transaction.
 * @param search The new search query.
 */
export const updateSearch = ({ commit }, search) => {
  commit('UPDATE_SEARCH', search);
};

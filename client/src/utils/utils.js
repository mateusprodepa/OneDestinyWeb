import {
  ONEDESTINY_TOKEN_KEY,
  endpoints
} from '../config/config';

import axios from 'axios';

export async function userRequest(URL) {

  return new Promise((resolve, reject) => {

    axios.get(URL, {
      headers: { Authorization: `Bearer ${auth.getToken()}` }
    })

    .then(res => {
      if(res) {
        resolve(res.data);
      }
    })

    .catch(err => err);

  });
}

const auth = {

  isAuthenticated: () =>
    localStorage.getItem(ONEDESTINY_TOKEN_KEY) !== null ? true : false,

  logout: () =>
    localStorage.removeItem(ONEDESTINY_TOKEN_KEY),

  getToken: () =>
    localStorage.getItem(ONEDESTINY_TOKEN_KEY),

  setToken: token =>
    localStorage.setItem(ONEDESTINY_TOKEN_KEY, token)
}

const user = {
  fetchUserData: () => {
    return new Promise(resolve => {
      userRequest(endpoints.USER_DATA_URL)
      .then(userData => {
        resolve(userData);
      })
    })
  }
}

export {
  auth,
  user
}

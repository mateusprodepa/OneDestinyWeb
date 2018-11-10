import { types } from '../config/config';
import { user } from '../utils/utils';

export function userDataHasErrored(bool) {
  return {
    type: types.USER_DATA_HAS_ERRORED,
    hasErrored: bool
  }
}

export function userDataIsLoading(bool) {
  return {
    type: types.USER_DATA_IS_LOADING,
    isLoading: bool
  }
}

export function userDataFetchSuccess(user) {
  return {
    type: types.USER_DATA_FETCH_SUCCESS,
    user
  }
}

export function userFetchData(url) {
  return dispatch => {
    dispatch(userDataIsLoading(true));
    user.fetchUserData()
    .then(res => {
      dispatch(userDataIsLoading(false));

      return new Promise((resolve, reject) => {
        if(res) return resolve(res)
        dispatch(userDataHasErrored(true));
      })
    })
    .then(user => dispatch(userDataFetchSuccess(user)))
  }
}

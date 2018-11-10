import { types } from '../config/config';

export function userDataHasErrored(state = false, action) {
  switch(action.type) {
    case types.USER_DATA_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function userDataIsLoading(state = false, action) {
  switch(action.type) {
    case types.USER_DATA_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function user(state = [], action) {
  switch(action.type) {
    case types.USER_DATA_FETCH_SUCCESS:
      return action.user;

    default:
      return state;
  }
}

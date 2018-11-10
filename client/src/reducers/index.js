import { combineReducers } from 'redux';

import { user, userDataHasErrored, userDataIsLoading } from './user';

const reducer = combineReducers({
  user,
  userDataHasErrored,
  userDataIsLoading
});

export default reducer;

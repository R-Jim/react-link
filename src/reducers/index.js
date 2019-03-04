import { combineReducers } from 'redux'

import login from './Login'
import register from './Register'
import account from './Account'

export default combineReducers({
  login,
  register,
  account,
});

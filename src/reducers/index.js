import { combineReducers } from 'redux';

import login from './Login';
import register from './Register';

export default combineReducers({
  login,
  register,
});

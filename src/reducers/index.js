import { combineReducers } from 'redux';
import login from './Login';
import register from './Register';
import account from './Account';

export const REHYDRATION_COMPLETE = 'REHYDRATION_COMPLETE';


export default combineReducers({
  login,
  register,
  account,
});

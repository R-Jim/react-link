import { combineReducers } from 'redux';
import login from './Login';
import register from './Register';
import account from './Account';
import form from './form';
import resource from './resource';

export const REHYDRATION_COMPLETE = 'REHYDRATION_COMPLETE';

export default combineReducers({
  login,
  register,
  account,
  form,
  resource,
});

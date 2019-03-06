import { all, take } from 'redux-saga/effects';
import loginSaga from './login';
import registerSaga from './register';
import passwordChangeSaga from './passwordChange';
import { REHYDRATION_COMPLETE } from '../reducers';

export default function* rootSaga() {
  yield take(REHYDRATION_COMPLETE);
  yield all([
    loginSaga(),
    registerSaga(),
    passwordChangeSaga(),
  ])
}

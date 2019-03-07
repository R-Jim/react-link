import { all, take } from 'redux-saga/effects';
import loginSaga from './login';
import registerSaga from './register';
import userSaga from './user';
import resourceSaga from './resource';
import { REHYDRATION_COMPLETE } from '../reducers';

export default function* rootSaga() {
  yield take(REHYDRATION_COMPLETE);
  yield all([
    loginSaga(),
    registerSaga(),
    userSaga(),
    resourceSaga(),
  ])
}

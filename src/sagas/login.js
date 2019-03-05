import { take, select, put, all, delay } from 'redux-saga/effects';
import {
  LOGIN_START,
  selectUsername, selectPassword,
  loginSuccess, loginFailed
} from '../reducers/Login';
import { selectAccount, loadAccount } from '../reducers/Account';

export function* loginSaga() {
  while (1) {
    yield take(LOGIN_START);
    const username = yield select(selectUsername);
    const password = yield select(selectPassword);
    const account = yield select(selectAccount, username, password);
    yield delay(1000);
    if (account) {
      yield put(loginSuccess());
      yield put(loadAccount(username));
    } else {
      yield put(loginFailed());
    }
  }
}

export default function* rootLoginSaga() {
  yield all([
    loginSaga(),
  ])
};

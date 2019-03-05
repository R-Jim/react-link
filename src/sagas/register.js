import { all, take, select, put, delay } from 'redux-saga/effects';
import {
  REGISTER_START,
  selectUsername, registerSuccess, registerFailed, selectRegisterFormData
} from '../reducers/Register';
import { checkExistUsername, register, loadAccount } from '../reducers/Account';

export function* registerSaga() {
  while (1) {
    yield take(REGISTER_START);
    const registerFormData = yield select(selectRegisterFormData);
    const username = yield select(selectUsername);
    const account = yield select(checkExistUsername, username);
    yield delay(1000);
    if (!account) {
      yield put(registerSuccess());
      yield put(register(registerFormData));
      yield put(loadAccount(username));
    } else {
      yield put(registerFailed());
    }
  }
}

export default function* rootRegisterSaga() {
  yield all([
    registerSaga(),
  ])
}

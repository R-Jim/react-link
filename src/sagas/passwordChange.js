import { take, select, all, put } from 'redux-saga/effects';
import {
  PASSWORD_CHANGE_START,
  selectFormData, changePasswordSuccess, changePasswordFail, resetForm
} from '../reducers/PasswordChangeModal';
import { selectCurrentAccount, changePassword } from '../reducers/Account';

export function* passwordChangeSaga() {
  while (1) {
    yield take(PASSWORD_CHANGE_START);
    const { oldPassword, newPassword } = yield select(selectFormData);
    const account = yield select(selectCurrentAccount);
    if (account.password === oldPassword) {
      yield put(changePasswordSuccess());
      yield put(changePassword(account.username, newPassword));
      yield put(resetForm());
    } else {
      yield put(changePasswordFail());
    }
  }
}

export default function* passwordChangeRootSaga() {
  yield all([
    passwordChangeSaga(),
  ])
}

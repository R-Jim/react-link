import { take, select, all, put } from 'redux-saga/effects';
import { selectCurrentAccount, changePassword } from '../reducers/Account';
import { FORM_SUBMIT_START, selectForm, resetForm, formSubmitFail, formSubmitSuccess } from '../reducers/form';
import { FORM_NAME } from '../containers/PasswordChangeModal/PasswordChangeModal';

export function* passwordChangeSaga() {
  while (1) {
    const action = yield take(FORM_SUBMIT_START);
    const formName = action.payload;
    if (formName !== FORM_NAME) {
      return;
    }
    const form = yield select(selectForm, formName);
    const { oldPassword, newPassword, confirmPassword } = form.data;
    const account = yield select(selectCurrentAccount);
    if (newPassword !== confirmPassword) {
      yield put(formSubmitFail(formName, 'Confirm password not match'));
    } else if (account.password === oldPassword) {
      yield put(formSubmitSuccess());
      yield put(changePassword(account.username, newPassword));
      yield put(resetForm(formName));
    } else {
      yield put(formSubmitFail(formName, 'Old password not match'));
    }
  }
}

export default function* userRootSaga() {
  yield all([
    passwordChangeSaga(),
  ])
}

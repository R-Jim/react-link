import { call, take, select, all, put } from 'redux-saga/effects';
import { getCountryList } from '../commons/api';
import { loadResourcesToForm } from '../reducers/form';

export function* getCountryListSaga() {
  const { data } = yield call(getCountryList);
  yield put(loadResourcesToForm(
    'countries', data.map((country) => ({ value: country.name, label: country.name }))));
}

export default function* resourceRootSaga() {
  yield all([
    getCountryListSaga(),
  ])
}

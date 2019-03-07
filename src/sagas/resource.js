import { call, take, select, all, put } from 'redux-saga/effects';
import { getCountryList } from '../commons/api';
import { loadResourcesToForm } from '../reducers/form';

export function* getCountryListSaga() {
  const countries = yield call(getCountryList);
  yield put(loadResourcesToForm(
    'countries', countries.data.map((country) => { return { value: country.name, label: country.name } })));
}

export default function* resourceRootSaga() {
  yield all([
    getCountryListSaga(),
  ])
}

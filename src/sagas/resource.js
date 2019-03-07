import { call, take, select, all, put } from 'redux-saga/effects';
import { getCountryList } from '../commons/api';
// import { loadResourcesToForm } from '../reducers/form';
import { loadResource } from '../reducers/resource';

export function* getCountryListSaga() {
  const { data } = yield call(getCountryList);
  yield put(loadResource(
    'countries', data.map((country) => ({ value: country.name, label: country.name }))));
}

export default function* resourceRootSaga() {
  yield all([
    getCountryListSaga(),
  ])
}

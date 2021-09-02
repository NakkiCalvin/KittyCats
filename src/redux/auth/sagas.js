import { takeEvery } from 'redux-saga/effects';

import { actions as types } from './index';

function* fetch() {
  // try {

  // } catch () {

  // }
}

const appSagas = [
  takeEvery(types.fetchRequest, fetch),
];

export default appSagas;

import { all } from 'redux-saga/effects';

import authSagas from './auth/sagas';

// eslint-disable-next-line max-len
// TODO: i think we should work with hooks. react-use. useAsyncFn(), useAsync() it better way cuz saga good for more extensive apps.
export default function* root() {
  yield all([
    ...authSagas,
  ]);
}

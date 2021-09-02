import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  FETCH_REQUEST: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.fetchRequest, handlers.fetchRequest],
  ]),
  initialState,
);

export default reducer;

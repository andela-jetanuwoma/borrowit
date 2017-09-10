import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';


/**
 * @export
 * @param {object} initialState
 * @returns {object} store object
 */
function configureStore(initialState) {
  return createStore(rootReducer,
  initialState,
  applyMiddleware(thunk, reduxImmutableStateInvariant()),
);
}

const store = configureStore();

export default store;
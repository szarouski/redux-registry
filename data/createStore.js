// data/createStore.js

import { combineReducers, createStore } from 'redux';
import reducerRegistry from './reducerRegistry';

const initialState = {notifications: []};/* from local storage or server */

//preserveInitialState for not-yet-loaded reducers,
//basically create a placeholder for each reducer that doesn't exist yet per each initialState property
const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(reducer, initialState);

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

export default store;
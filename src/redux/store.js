import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';

import updateFilterList from './reducers/updateFilterList';
import updateTicketsList from './reducers/updateTicketsList';

const rootReducers = combineReducers({ updateFilterList, updateTicketsList });

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const logMiddleware = () => (next) => (action) => {
  const result = next(action);
  return result;
};

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logMiddleware)));
export default store;

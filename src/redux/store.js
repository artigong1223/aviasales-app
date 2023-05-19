import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers';

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

const store = createStore(reducer, composeEnhancers(applyMiddleware(logMiddleware)));
export default store;

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { logger } from 'redux-logger';

import Devtools from '../components/shared/Devtools';
import ProgressReducer from '../reducers/progress';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

const enhancer = compose(
  applyMiddleware(logger),
  Devtools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(combinedReducers, initialState, enhancer);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('../reducers/progress', () =>
      store.replaceReducer(ProgressReducer),
    );
  }

  return store;
}

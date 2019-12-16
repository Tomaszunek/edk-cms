import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import { counterReducer } from './Counter/reducers';
import { Counter } from './Counter/types';

const rootReducer = combineReducers({
  counter: counterReducer as any
});

export function configureStore(initialState?: IRootState): Store<IRootState> {
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer as any,
    initialState as any,
    composeWithDevTools(middleWareEnhancer) as any
  );

  return store;
}

export type CounterState = Counter;

export interface IRootState {
  counter: CounterState;
  router?: any;
}

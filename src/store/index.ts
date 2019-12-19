import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import { counterReducer } from './Counter/reducers';
import { yearReducer } from './Year/reducers';
import { dropdownMenuReducer } from './DropdownMenu/reducers';

import { Counter } from './Counter/types';
import { IYear } from './Year/types';
import { IDropdownMenu } from './DropdownMenu/types';

const rootReducer = combineReducers({
  counter: counterReducer as any,
  years: yearReducer as any,
  dropdownMenu: dropdownMenuReducer as any
});

export function configureStore(initialState?: IRootState): Store {
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
export type YearState = IYear;
export type DropDownMenuState = IDropdownMenu;

export interface IRootState {
  counter: CounterState;
  years: YearState;
  dropdownMenu: DropDownMenuState;
  router?: any;
}

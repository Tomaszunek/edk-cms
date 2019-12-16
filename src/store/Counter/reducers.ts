import { CounterState, INC, DEC, CounterActionTypes } from './types';

const initialState: CounterState = {
  count: 5
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INC:
      return {
        count: state.count + action.payload.count
      };
    case DEC:
      return {
        count: state.count - action.payload.count
      };
    default:
      return state;
  }
}

import { IYearState, FETCH_YEAR_DATA, YearActionTypes } from './types';

const initialState: IYearState = {
  data: []
};

export function yearReducer(
  state = initialState,
  action: YearActionTypes
): IYearState {
  switch (action.type) {
    case FETCH_YEAR_DATA:
      return {
        data: action.payload.data
      };
    default:
      return state;
  }
}

export interface IYear {
  data: any;
}

export interface IYearState {
  data: any;
}

// Describing the different ACTION NAMES available
export const FETCH_YEAR_DATA = 'FETCH_YEAR_DATA';

interface IFetchYearDataAction {
  type: typeof FETCH_YEAR_DATA;
  payload: IYear;
}

export type YearActionTypes = IFetchYearDataAction;

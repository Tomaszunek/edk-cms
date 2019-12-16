import { IYear, FETCH_YEAR_DATA } from './types';

export function fetchYearData(year: IYear) {
  return {
    type: FETCH_YEAR_DATA,
    payload: year
  };
}

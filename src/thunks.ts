import { Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { fetchYearData } from './store/Year/actions';
import { IRootState } from './store';
import { HOSTNAME_API } from './constants/routing';

// function exampleAPI() {
//   return Promise.resolve(5);
// }

// const getFromApi = () => {
//   const data = axios.get(`${HOSTNAME_API}/api`);
//   return data;
// };

const getYearsContemplations = async () => {
  console.log("abc")
  const response = await fetch(`${HOSTNAME_API}/yearLangEvent/getAll`);
  const data = await response.json();
  return data;
};

export const thunkSendMessage = (): ThunkAction<void, IRootState, null, Action> => async dispatch => {
  const asyncResp = await getYearsContemplations();
  dispatch(fetchYearData({ data: asyncResp}));
};

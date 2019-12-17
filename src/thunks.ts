import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchYearData } from './store/Year/actions';
import { IRootState } from './store';
import { HOSTNAME_API } from './constants/routing';

const getYearsContemplations = async () => {
  const response = await fetch(`${HOSTNAME_API}/yearLangEvent/getAll`);
  const data = await response.json();
  return data;
};

export const thunkSendMessage = (): ThunkAction<void, IRootState, null, Action> => async dispatch => {
  const asyncResp = await getYearsContemplations();
  dispatch(fetchYearData({ data: asyncResp}));
};

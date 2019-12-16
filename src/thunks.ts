import { Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { INCRE } from './store/Counter/actions';
import { IRootState } from './store';
import { Counter } from './store/Counter/types';
import { HOSTNAME_API } from './constants/routing';

export const thunkSendMessage = (
  counter: Counter
): ThunkAction<void, IRootState, null, Action> => async dispatch => {
  const asyncResp = await getFromApi();
  dispatch(INCRE({ count: asyncResp.data.item + counter.count }));
};

function exampleAPI() {
  return Promise.resolve(5);
}

const getFromApi = () => {
  const data = axios.get(`${HOSTNAME_API}/api`);
  return data;
};

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchYearData } from './store/Year/actions';
import { fetchDropdownMenuData } from './store/DropdownMenu/actions';
import { IRootState } from './store';
import { HOSTNAME_API_PUB, HOSTNAME_API_SEC } from './constants/routing';

const getYearsContemplations = async () => {
  const response = await fetch(`${HOSTNAME_API_PUB}/yearLangEvent/getAll`);
  const data = await response.json();
  return data;
};

const getDropdownData = async () => {
  const response = await fetch(`${HOSTNAME_API_SEC}/menu/getDropdownMenuItems`);
  const data = await response.json();
  return data;
};

export const thunkSendMessage = (): ThunkAction<
  void,
  IRootState,
  null,
  Action
> => async dispatch => {
  const asyncResp = await getYearsContemplations();
  dispatch(fetchYearData({ data: asyncResp }));
};

export const thunkDropdownData = (): ThunkAction<
  void,
  IRootState,
  null,
  Action
> => async dispatch => {
  const asyncResp = await getDropdownData();
  console.log(asyncResp);
  dispatch(
    fetchDropdownMenuData({
      language: asyncResp.language,
      year: asyncResp.year
    })
  );
};

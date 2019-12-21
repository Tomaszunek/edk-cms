import {
  IDropdownMenuState,
  FETCH_DROPDOWN_DATA,
  DropdownMenuActionTypes
} from './types';

const initialState: IDropdownMenuState = {
  year: [],
  language: []
};

export function dropdownMenuReducer(
  state = initialState,
  action: DropdownMenuActionTypes
): IDropdownMenuState {
  switch (action.type) {
    case FETCH_DROPDOWN_DATA:
      return {
        year: action.payload.year,
        language: action.payload.language
      };
    default:
      return state;
  }
}

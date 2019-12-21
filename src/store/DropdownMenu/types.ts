export interface IDropdownMenu {
  year: any;
  language: any;
}

export interface IDropdownMenuState {
  year: any;
  language: any;
}

// Describing the different ACTION NAMES available
export const FETCH_DROPDOWN_DATA = 'FETCH_DROPDOWN_DATA';

interface IFetchDropdownDataAction {
  type: typeof FETCH_DROPDOWN_DATA;
  payload: IDropdownMenu;
}

export type DropdownMenuActionTypes = IFetchDropdownDataAction;

import { IDropdownMenu, FETCH_DROPDOWN_DATA } from './types';

export function fetchDropdownMenuData(dropdownMenu: IDropdownMenu) {
  return {
    type: FETCH_DROPDOWN_DATA,
    payload: dropdownMenu
  };
}

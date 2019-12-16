export interface Counter {
  count: number;
}

export interface CounterState {
  count: number;
}

// Describing the different ACTION NAMES available
export const INC = 'INC';
export const DEC = 'DEC';

interface INCAction {
  type: typeof INC;
  payload: Counter;
}

interface DECAction {
  type: typeof DEC;
  payload: Counter;
}

export type CounterActionTypes = INCAction | DECAction;

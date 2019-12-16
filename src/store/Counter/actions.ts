import { Counter, INC, DEC } from './types';

export function INCRE(con: Counter) {
  return {
    type: INC,
    payload: con
  };
}

export function DECRE(con: Counter) {
  return {
    type: DEC,
    payload: con
  };
}

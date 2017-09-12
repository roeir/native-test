import { SELECT_LIBRARY } from '../constants';

export const selectLibrary = id => ({
  type: SELECT_LIBRARY,
  payload: id,
});
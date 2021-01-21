import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectElementList = state => state.elementList || initialState;

export const ListSelector = createSelector(
  selectElementList,
  state => state.data,
);

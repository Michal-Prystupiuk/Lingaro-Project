import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectElementList = state => state.carouselSlider || initialState;

export const ListSelector = createSelector(
  selectElementList,
  state => state.data,
);

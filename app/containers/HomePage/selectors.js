import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectElementList = state => state.elementList || initialState;

export const ListSelector = createSelector(
  selectElementList,
  state => state.data,
);

export const SortedListSelector = createSelector(
  selectElementList,
  state =>
    state.data.filter(element => element.text.includes(state.searchText)),
);

export const SearchTextSelector = createSelector(
  selectElementList,
  state => state.searchText,
);

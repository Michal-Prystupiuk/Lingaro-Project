import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectElementList = state => state.elementList || initialState;

export const ListSelector = createSelector(
  selectElementList,
  state => state.data,
);

export const SearchTextSelector = createSelector(
  selectElementList,
  state => state.searchText,
);

export const SortedListSelector = createSelector(
  ListSelector,
  SearchTextSelector,
  (data, searchText) =>
    data.filter(({ text }) => text.toLowerCase().includes(searchText)),
);

import { ADD_ELEMENT, DELETE_ELEMENT, UPDATE_SEARCH_TEXT } from './consts';

export const addElementToList = elementText => ({
  type: ADD_ELEMENT,
  elementText,
});

export const deleteElementFromList = elementId => ({
  type: DELETE_ELEMENT,
  elementId,
});

export const updateSearchText = searchText => ({
  type: UPDATE_SEARCH_TEXT,
  searchText,
});

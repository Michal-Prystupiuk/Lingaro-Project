import { ADD_ELEMENT, DELETE_ELEMENT } from './consts';

export const addElementToList = element => ({
  type: ADD_ELEMENT,
  element,
});

export const deleteElementFromList = elementId => ({
  type: DELETE_ELEMENT,
  elementId,
});

import { ADD_ELEMENT, DELETE_ELEMENT } from './consts';

export const addElementToList = elementText => ({
  type: ADD_ELEMENT,
  elementText,
});

export const deleteElementFromList = elementId => ({
  type: DELETE_ELEMENT,
  elementId,
});

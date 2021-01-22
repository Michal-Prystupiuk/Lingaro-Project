import produce from 'immer';
import { updateArray } from './utils';
import { ADD_ELEMENT, DELETE_ELEMENT, UPDATE_SEARCH_TEXT } from './consts';

// The initial state of the App
export const initialState = {
  data: [],
  searchText: '',
};

/* eslint-disable default-case, no-param-reassign */
const elementListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_ELEMENT:
        draft.data.push({ id: draft.data.length, text: action.elementText });
        break;
      case DELETE_ELEMENT:
        draft.data = updateArray(draft.data, action.elementId);
        break;
      case UPDATE_SEARCH_TEXT:
        draft.searchText = action.searchText;
        break;
    }
  });

export default elementListReducer;

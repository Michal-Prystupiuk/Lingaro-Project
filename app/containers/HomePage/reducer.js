import produce from 'immer';
import { ADD_ELEMENT, DELETE_ELEMENT } from './consts';

// The initial state of the App
export const initialState = {
  data: [],
};

const updateArray = (stack, elementId) => {
  const newStack = [];

  for (let i = 0; i < stack.length; i++) {
    if (stack[i].id < elementId) {
      newStack.push(stack[i]);
    } else if (stack[i].id > elementId) {
      newStack.push({ id: stack[i].id - 1, element: stack[i].element });
    }
  }

  return newStack;
};

/* eslint-disable default-case, no-param-reassign */
const elementListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_ELEMENT:
        draft.data.push(action.element);
        break;
      case DELETE_ELEMENT:
        draft.data = updateArray(draft.data, action.elementId);
        break;
    }
  });

export default elementListReducer;

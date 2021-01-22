export const updateArray = (stack, elementId) => {
  const newStack = [];

  for (let i = 0; i < stack.length; i++) {
    if (stack[i].id < elementId) {
      newStack.push(stack[i]);
    } else if (stack[i].id > elementId) {
      newStack.push({ id: stack[i].id - 1, text: stack[i].text });
    }
  }

  return newStack;
};

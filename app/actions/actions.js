import { ADD_TODO, REMOVE_TODO } from 'constants/action-types';

export const addTodo = (name) => ({
  type: ADD_TODO,
  payload: { name, id: Date.now() },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
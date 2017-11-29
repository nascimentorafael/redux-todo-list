import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers/reducer';
import logMiddleware from 'middleware/log';

const initialState = { todos: [{ name: 'Test 01', id: 1 }] };

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logMiddleware)
);

export default store;
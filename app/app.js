import store from './store';
import { removeTodo, addTodo } from './actions/actions';
import loadUI from './ui/index';

window.store = store;

loadUI();

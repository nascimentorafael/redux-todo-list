import $ from 'jquery';
import store from 'store';
import { addTodo, removeTodo } from './../actions/actions';

function updateUI() {
  const { todos } = store.getState();
  const renderTodo = (todo) =>
  `<li class="list">
    ${ todo.name }
    <button id=${ todo.id }>
      Remove
    </button>
  </li>`;

  $('.todos > ul').html(todos.map(renderTodo));
}

function handleRemove() {
  const $buttons = $('.list > button');
  store.dispatch(removeTodo(this.id));
}

function handleAdd() {
  const $todoName = $('.todos > input');
  if ($todoName.val() === '') {
    return;
  }
  store.dispatch(addTodo($todoName.val()));
  $todoName.val('');
}

export default function loadUI() {
  $('#app').append(`
    <div class="todos">
      <ul></ul>
      <input type="text" />
      <button>Add</button>
    </div>
  `);

  store.subscribe(updateUI);

  $(document).on('click', '.todos > button', handleAdd);
  $(document).on('click', '.list > button', handleRemove);

  updateUI();
};

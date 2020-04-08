// State
let todos = [];
let completedCount = 0;
let navStatus = 'all';

// DOM
const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedTodos = document.querySelector('.completed-todos');
const $completedAll = document.getElementById('ck-complete-all');
const $nav = document.querySelector('.nav');


// todo-list count 함수
const countTodoList = () => {
  $activeTodos.textContent = todos.length;
};

// 완료 카운트 함수
const completedTodos = () => {
  $completedTodos.textContent = completedCount;
};

// 선택 함수
const selectRender = todo => (navStatus === 'all' ? todo : navStatus === 'active' ? !todo.completed : todo.completed);

// 렌더함수
const render = () => {
  let html = '';
  todos.filter(todo => selectRender(todo)).forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  $todos.innerHTML = html;
  countTodoList();
  completedTodos();
};

// id 취득 함수
const getTodoId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

// 정보 저장 함수
const saveTodoData = () => {
  todos = [{ id: getTodoId(), content: $inputTodo.value, completed: false }, ...todos];
};

// 정보 삭제 함수
const removeTodoData = target => {
  todos = todos.filter(todo => todo.id !== +target.parentElement.id);
  render();
};


// checkbox 선택 함수

const selectCheckbox = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

// all 선택 함수
const completedAll = checked => {
  todos = todos.map(todo => ({ ...todo, completed: checked }));
  render();
};


// todo clear 함수
const clearCompleted = () => {
  const temp = todos.length;
  todos = todos.filter(todo => !todo.completed);
  completedCount += temp - todos.length;
  render();
};


// 네비 선택 함수
const selectNav = target => {
  [...$nav.children].forEach((item) => {
    if (target.id === item.id) {
      item.classList.add('active');
      navStatus = item.id;
    } else item.classList.remove('active');
  });
  render();
};

// key up 이벤트
$inputTodo.onkeyup = (e) => {
  if (e.keyCode !== 13 || !$inputTodo.value) return;
  saveTodoData();
  render();
  $inputTodo.value = '';
};

// 삭제 버튼 클릭 이벤트
$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  removeTodoData(e.target);
};

// checkbox 선택 이벤트
$todos.onchange = e => {
  if (!e.target.matches('.todos > .todo-item > .checkbox')) return;
  selectCheckbox(e.target.parentNode.id);
};


// todo 완료처리 이벤트
$clearCompleted.onclick = e => {
  if (!e.target.matches('.clear-completed > .btn')) return;
  clearCompleted();
};

// All 선택 Check box 이벤트
$completedAll.onchange = e => {
  completedAll(e.target.checked);
};


$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li')) return;
  selectNav(target);
};

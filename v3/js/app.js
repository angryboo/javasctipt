// State
let todos = [];

// DOM
const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedTodos = document.querySelector('.completed-todos');
const $completedAll = document.getElementById('ck-complete-all');
const $all = document.getElementById('all');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');


// todo-list count 함수
const counterTodoList = () => {
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

// 완료 카운트 함수
const completedTodos = () => {
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
};

// 랜더 선택 함수
const selectRender = todo => {
  if ($all.className === 'active') return todo;
  return $active.className === 'active' ? !todo.completed : todo.completed;
};


// 렌더함수
const render = () => {
  let html = '';
  [...todos].filter(todo => selectRender(todo)).forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="checkbox" type="checkbox">
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  $todos.innerHTML = html;
  counterTodoList();
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


// 완료처리 함수
const completeTodo = arr => {
  let tempArr = [];
  tempArr = todos.filter(todo => arr.some(item => todo.id === item));
  tempArr = tempArr.map(todo => ({ ...todo, completed: true }));
  todos = [...todos.filter(todo => arr.every(item => todo.id !== item)), ...tempArr];
  todos = todos.sort((a, b) => b.id - a.id);
  render();
};

// checkbox 선택 함수
const selectCheckbox = () => {
  const $checkbox = document.querySelectorAll('.todo-item > .checkbox');
  const tempArr = [...$checkbox].filter(item => item.checked).map(item => +item.parentElement.id);
  completeTodo(tempArr);
};

// all 선택 함수
const completedAll = (target) => {
  const $checkbox = document.querySelectorAll('.todo-item > .checkbox');

  [...$checkbox].forEach(item => {
    item.checked = target.checked || false;
  });
};


// key up 이벤트
$inputTodo.onkeyup = (e) => {
  if (e.keyCode !== 13 || !$inputTodo.value) return;
  saveTodoData();
  render();
  console.log(todos);
  $inputTodo.value = '';
};

// 삭제 버튼 클릭 이벤트
$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  removeTodoData(e.target);
};


// todo 완료처리 이벤트
$clearCompleted.onclick = e => {
  if (!e.target.matches('.clear-completed > .btn')) return;
  selectCheckbox();
  $completedAll.checked = false;
};

// All 선택 Check box 이벤트
$completedAll.onchange = e => {
  completedAll(e.target);
};

// All 선택 이벤트
$all.onclick = () => {
  $all.classList.add('active');
  $active.classList.remove('active');
  $completed.classList.remove('active');
  render();
};

// Active 선택 이벤트
$active.onclick = () => {
  $all.classList.remove('active');
  $active.classList.add('active');
  $completed.classList.remove('active');
  render();
};


// Completed 선택 이벤트
$completed.onclick = () => {
  $all.classList.remove('active');
  $active.classList.remove('active');
  $completed.classList.add('active');
  render();
};

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos = todos.map(todo => ({ ...todo, completed: true }));
  console.log(todos); // node 환경에서 확인용으로 삽입
  return todos;
}

toggleCompletedAll();

/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/

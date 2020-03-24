let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];


function toggleCompletedById(id) {
  todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  console.log(todos); // node 환경에서 확인용으로 삽입
  return todos;
}

toggleCompletedById(3);

/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

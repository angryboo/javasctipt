// const _ = require('lodash');
import _ from 'lodash';

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'javascript', completed: false }
];

const _todos = _.cloneDeep(todos);
console.log(_todos);

console.log(_todos === todos);
console.log(_todos[0] === todos[0]);

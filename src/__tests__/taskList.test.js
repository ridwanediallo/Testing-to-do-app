/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/taskList.js';

document.body.innerHTML = '<div>' + '<ul id="list"> </ul>' + '</div>';

const item = document.querySelector('#list');
const todo = new TaskList();

describe('Testing add functionality', () => {
  test('Add todo', () => {
    todo.addTodo('Have fun', todo.tasks);
    console.log(todo.tasks);
    expect(todo.tasks[0].desp).toEqual('Have fun');
  });
});

describe('Testing add functionality', () => {
  test('Add todo', () => {
    todo.addTodo('Go Shopping', todo.tasks);
    console.log(todo.tasks);
    expect(todo.tasks[1].desp).toEqual('Go Shopping');
  });
});

describe('Testing Remove functionality', () => {
  test('Remove todo', () => {
    todo.removeItem(0);
    console.log(todo.tasks);
    expect(todo.tasks.length).toBe(1);
  });
});

// describe('Testing Remove functionality', () => {
//   test('Remove  last todo ', () => {
//     todo.removeItem(1);
//     console.log(todo.tasks);
//     expect(todo.tasks.length).toBe(0);
//   });
// });

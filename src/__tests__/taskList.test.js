/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/taskList.js';

document.body.innerHTML = '<div>' + '<ul id="list"><li></li> </ul>' + '</div>';

const item = document.querySelector('#list');
const todo = new TaskList();

describe('Testing add functionality', () => {
  test('Add todo', () => {
    todo.addTodo('Have fun', todo.tasks);
    expect(todo.tasks[0].desp).toEqual('Have fun');
  });
});

describe('Testing add functionality', () => {
  test('Add todo', () => {
    todo.addTodo('Go Shopping', todo.tasks);
    expect(todo.tasks[1].desp).toEqual('Go Shopping');
  });
});

describe('Testing add functionality', () => {
  test('Add todo', () => {
    todo.addTodo('Workout', todo.tasks);
    expect(todo.tasks[2].desp).toEqual('Workout');
  });
});

describe('Testing Remove functionality', () => {
  test('Remove todo', () => {
    todo.removeItem(2);
    expect(todo.tasks.length).toBe(2);
  });
});

describe('Testing Remove functionality', () => {
  test('Remove todo', () => {
    todo.removeItem(1);
    expect(todo.tasks.length).toBe(1);
  });
});

describe('Testing Remove functionality', () => {
  test('Remove todo', () => {
    todo.removeItem(0);
    console.log(todo.tasks);
    expect(todo.tasks.length).toBe(0);
  });
});

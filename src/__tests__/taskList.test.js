/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/taskList.js';

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
    expect(todo.tasks.length).toBe(0);
  });
});

describe('Testing CompleteAll functionality', () => {
  test('Complete status', () => {
    todo.addTodo('Workout', todo.tasks);
    todo.clickCheck(0);
    expect(todo.tasks[0].done).toBeTruthy();
  });
});

describe('Testing CompleteAll functionality', () => {
  test('Complete status', () => {
    todo.addTodo('Finish my task', todo.tasks);
    console.log(todo.tasks);
    todo.clickCheck(1);
    expect(todo.tasks[1].done).toBeTruthy();
  });
});

describe('Testing CompleteAll functionality', () => {
  test('Complete status', () => {
    todo.addTodo('Do the homework', todo.tasks);
    todo.addTodo('Go out', todo.tasks);
    todo.clearCompleted();
    expect(todo.tasks.length).toBe(2);
  });
});

describe('Testing Edit todo functionality', () => {
  test('Edit todo', () => {
    todo.editTodo('Go home', 0);
    expect(todo.tasks[0].desp).toBe('Go home');
  });
});

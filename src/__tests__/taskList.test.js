/**
 * @jest-environment jsdom
 */
// jest.mock('../modules/taskList.js');

import TaskList from '../modules/taskList.js';

document.body.innerHTML = '<div>' + '<ul id="list"> </ul>' + '</div>';

const item = document.querySelector('#list');

describe('Testing add functionality', () => {
  test('Add todo', () => {
    const todo = new TaskList();
    todo.addTodo('Have fun', todo.tasks);
    console.log(todo.tasks);
    expect(todo.tasks[0].desp).toEqual('Have fun');
  });
});

/**
 * @jest-environment jsdom
 */

import TaskList from "../modules/taskList.js";

const todo = new TaskList();

document.body.innerHTML = "<div>" + '<ul id="list"> </ul>' + "</div>";

const item = document.querySelector("#list");

describe("Testing add functionality", () => {
  test("Add todo", () => {
    todo.addTodo("Have fun");
    expect(todo.tasks[0].desp).toEqual("Have fun");
  });
});

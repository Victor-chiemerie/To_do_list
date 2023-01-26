/**
 * @jest-environment jsdom
 */

import functions from "./src/modules/functionality";
import LocalStorage from "./src/modules/localstorage";

let list;
if (LocalStorage.getData() === null) {
  list = [];
} else {
  list = LocalStorage.getData();
}

test('should add a new task', () => {
    functions.addtask('hello world')
    expect(list[0].description).toStrictEqual('hello world');
})

test('should add another new task', () => {
    functions.addtask('hello world')
    expect(localStorage.length).toBe(2);
})

test('should remove a task', () => {
    functions.removeTask();
    expect(localStorage.length).toBe(1);
})
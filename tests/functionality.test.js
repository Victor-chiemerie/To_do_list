/**
 * @jest-environment jsdom
 */

import functions from '../src/modules/functionality.js';
import LocalStorage from '../src/modules/localstorage.js';

describe('Add Task method', () => {
  beforeEach(() => {
  document.body.innerHTML =
    '<div>' +
    '  <ul id="allLists"></ul>' +
    '</div>';
  })

  test('should add a new task', () => {
    functions.addtask('hello world');
    let list = LocalStorage.getData();
    expect(list[0].description).toStrictEqual('hello world')
    const displayed =document.querySelector('#allLists')
    list.forEach((item) => {
      displayed.innerHTML = `<li>${item}</li>`
    })
    const listed = document.querySelectorAll('#allLists li')
    expect(listed).toHaveLength(1);
  });

  test('should add another new task', () => {
    functions.addtask('second input');
    let list = LocalStorage.getData();
    expect(list[1].description).toStrictEqual('second input');
  });

  test('should add another new task', () => {
    functions.addtask('third input');
    let list = LocalStorage.getData();
    expect(list[2].description).toStrictEqual('third input');
  });

  test('should add another new task', () => {
    functions.addtask('third input');
    let list = LocalStorage.getData();
    expect(list[2].description).toStrictEqual('third input');
  });
});

describe('Remove Task method', () => {
  test('should remove a task', () => {
    functions.removeTask(0);
    expect(LocalStorage.getData()).toStrictEqual(
      [
        { description: 'second input', completed: false, index: 0 },
        { description: 'third input', completed: false, index: 1 }
      ]);
  });

  test('should remove a task', () => {
    functions.removeTask(0);
    let list = LocalStorage.getData();
    expect(list.length).toStrictEqual(1);
  });
});

describe('Edit Task method', () => {
  test('should edit a task', () => {
    functions.editTask('new third input', 0);
    let list = LocalStorage.getData();
    expect(list[0].description).toStrictEqual('new third input');
  });
});

describe('Change status method', () => {
  test('should change the completed status to true', () => {
    functions.markDone(0);
    let list = LocalStorage.getData();
    expect(list[0].completed).toStrictEqual(true);
  });
});

describe('Clear completed method', () => {
  test('should clear all completed task', () => {
    functions.clearCompletedtask();
    let list = LocalStorage.getData();
    list.forEach(task => {
      expect(task.completed).toStrictEqual(false);
    });
  });
});

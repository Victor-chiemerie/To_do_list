/**
 * @jest-environment jsdom
 */

import functions from '../src/modules/functionality.js';
import LocalStorage from '../src/modules/localstorage.js';

describe('Add Task method', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div>'
    + '  <ul id="allLists"></ul>'
    + '</div>';
  });

  test('should add a new task', () => {
    functions.addtask('hello world');
    const list = LocalStorage.getData();
    expect(list[0].description).toStrictEqual('hello world');
    const displayed = document.querySelector('#allLists');
    list.forEach((item) => {
      displayed.innerHTML += `<li>${item}</li>`;
    });
    const listed = document.querySelectorAll('#allLists li');
    expect(listed).toHaveLength(1);
  });

  test('should add another new task', () => {
    functions.addtask('second input');
    const list = LocalStorage.getData();
    const displayed = document.querySelector('#allLists');
    list.forEach((item) => {
      displayed.innerHTML += `<li>${item}</li>`;
    });
    const listed = document.querySelectorAll('#allLists li');
    expect(listed).toHaveLength(2);
  });

  test('should add another new task', () => {
    functions.addtask('third input');
    const list = LocalStorage.getData();
    expect(list[2].description).toStrictEqual('third input');
  });

  test('should add another new task', () => {
    functions.addtask('fourth input');
    const list = LocalStorage.getData();
    const displayed = document.querySelector('#allLists');
    list.forEach((item) => {
      displayed.innerHTML += `<li>${item}</li>`;
    });
    const listed = document.querySelectorAll('#allLists li');
    expect(listed).toHaveLength(4);
  });
});

describe('Remove Task method', () => {
  test('should remove a task', () => {
    functions.removeTask(0);
    const list = LocalStorage.getData();
    const displayed = document.querySelector('#allLists');
    let innertext = '';
    list.forEach((item) => {
      innertext += `<li>${item}</li>`;
    });
    displayed.innerHTML = innertext;
    const listed = document.querySelectorAll('#allLists li');
    expect(listed).toHaveLength(3);
  });

  test('should remove a task', () => {
    functions.removeTask(0);
    const list = LocalStorage.getData();
    const displayed = document.querySelector('#allLists');
    let innertext = '';
    list.forEach((item) => {
      innertext += `<li>${item}</li>`;
    });
    displayed.innerHTML = innertext;
    const listed = document.querySelectorAll('#allLists li');
    expect(listed).toHaveLength(2);
  });
});

describe('Edit Task method', () => {
  test('should edit a task', () => {
    functions.editTask('new third input', 0);
    const list = LocalStorage.getData();
    expect(list[0].description).toStrictEqual('new third input');
  });
});

describe('Change status method', () => {
  test('should change the completed status to true', () => {
    functions.markDone(0);
    const list = LocalStorage.getData();
    expect(list[0].completed).toStrictEqual(true);
  });
});

describe('Clear completed method', () => {
  test('should clear all completed task', () => {
    functions.clearCompletedtask();
    const list = LocalStorage.getData();
    list.forEach((task) => {
      expect(task.completed).toStrictEqual(false);
    });
  });
});

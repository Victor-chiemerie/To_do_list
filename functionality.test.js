/**
 * @jest-environment jsdom
 */

import functions from './src/modules/functionality.js';
import LocalStorage from './src/modules/localstorage.js';

describe('functionality methods', () => {
  test('should add a new task', () => {
    functions.addtask('hello world');
    expect(LocalStorage.getData()).toStrictEqual([{ description: 'hello world', completed: false, index: 0 }]);
  });
  test('should add a new task', () => {
    functions.addtask('second input');
    expect(LocalStorage.getData()).toStrictEqual([{ description: 'hello world', completed: false, index: 0 }, { description: 'second input', completed: false, index: 1 }]);
  });
  test('should remove a task', () => {
    functions.removeTask(0);
    expect(LocalStorage.getData()).toStrictEqual([{ description: 'second input', completed: false, index: 0 }]);
  });
});

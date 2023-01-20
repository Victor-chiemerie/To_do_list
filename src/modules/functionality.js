import Work from './work.js';
import LocalStorage from './localstorage.js';

let list;
if (LocalStorage.getData() === null) {
  list = [];
} else {
  list = LocalStorage.getData();
}
export default class functions {
    static addtask = (inputTask) => {
      if (inputTask) {
        const newtask = new Work(inputTask);
        list.push(newtask);
        list.forEach((item, number) => {
          item.index = number;
        });
        LocalStorage.saveData(list);
      }
    }

    static removeTask = (index) => {
      list = LocalStorage.getData();
      list.splice(index, 1);
      LocalStorage.saveData(list);
    }

    static editTask = (newDescription, index) => {
      list = LocalStorage.getData();
      list[index].description = newDescription;
      LocalStorage.saveData(list);
    }
}
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
        this.resetIndex();
        LocalStorage.saveData(list);
      }
    }

    static removeTask = (index) => {
      list = LocalStorage.getData();
      list.splice(index, 1);
      this.resetIndex();
      LocalStorage.saveData(list);
    }

    static editTask = (newDescription, index) => {
      list = LocalStorage.getData();
      list[index].description = newDescription;
      LocalStorage.saveData(list);
    }

    static markDone = (index) => {
      list = LocalStorage.getData();
      list[index].completed = true;
      LocalStorage.saveData(list);
    }

    static UnmarkDone = (index) => {
      list = LocalStorage.getData();
      list[index].completed = false;
      LocalStorage.saveData(list);
    }

    static resetIndex = () => {
      list.forEach((item, number) => {
        item.index = number;
      });
    }

    static clearCompletedtask = () => {
      list = LocalStorage.getData();
      list = list.filter((task) => task.completed === false);
      this.resetIndex();
      LocalStorage.saveData(list);
    }
}
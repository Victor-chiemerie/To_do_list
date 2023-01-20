import './style.css';
import functions from './modules/functionality.js';
import LocalStorage from './modules/localstorage.js';

const chores = document.querySelector('ul');

const printTasks = () => {
  let list;
  if (LocalStorage.getData() === null) {
    list = [];
  } else {
    list = LocalStorage.getData();
  }
  let innertext = '';
  list.forEach((work, i) => {
    innertext += `
      <li>
      <div>
      <input type="checkbox" name="" id="check${i}">
      <input type="text" class="strikethrough" id="task${i}" value="${work.description}">
      </div>
      <span id="removeTask${i}" class="material-symbols-outlined">delete</span>
      </li>
      `;
  });

  chores.innerHTML = innertext;

  list.forEach((work, index) => {
    const removeTask = document.getElementById(`removeTask${work.index}`);
    if (removeTask) {
      removeTask.addEventListener('click', () => {
        functions.removeTask(index);
        printTasks();
      });
    }
  });

  list.forEach((work, index) => {
    const newInput = document.getElementById(`task${work.index}`);
    if (newInput) {
      newInput.addEventListener(('keydown'), (event) => {
        if (event.code === 'Enter') {
          event.preventDefault();
          functions.editTask(newInput.value, index);
          printTasks();

          newInput.value = '';
        }
      });
    }
  });

  // list.forEach((work, index) => {
  //   const checker = document.getElementById(`check${index}`);
  //   checker.addEventListener('change', () => {
  //     functions.markDone(index);
  //     console.log(list);
  //     printTasks();
  //   })
  // })
};

printTasks();

const task = document.getElementById('task');
task.addEventListener(('keydown'), (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    functions.addtask(task.value);
    printTasks();

    task.value = '';
  }
});

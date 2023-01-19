import './style.css';
import Work from './modules/list.js';

const newtask = new Work();
const chores = document.querySelector('ul');

const printTasks = () => {
  const list = JSON.parse(localStorage.getItem('list')) || [];
  let innertext = '';
  list.forEach((work, i) => {
    innertext += `
      <li>
      <div>
      <input type="checkbox" name="" id="">
      <input type="text" name="task" id="task" value="${work.description}">
      </div>
      <span id="removeTask${i}" class="material-symbols-outlined">delete</span>
      </li>
      `;
  });

  chores.innerHTML = innertext;

  list.forEach((work, index) => {
    const removeTask = document.getElementById(`removeTask${work.index}`)
    removeTask.addEventListener('click', () => {
      newtask.removeTask(index);
      printTasks();
    })
  })
}

printTasks();

const task = document.getElementById('task');
 task.addEventListener(('keydown'), (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    newtask.addtask(task.value)
    printTasks();

    task.value = '';
  }
 })


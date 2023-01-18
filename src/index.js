import _ from 'lodash';
import './style.css';

  let task = [
    {
      description: "wash the car",
      completed: false,
      index: 0
    },
    {
      description: "sweep the house",
      completed: false,
      index: 1
    },
    {
      description: "prepare supper",
      completed: false,
      index: 2
    },
    {
      description: "walk the dog",
      completed: false,
      index: 3
    }
  ];

  const chores = document.querySelector('ul')

  task.forEach(work => {
    chores.innerHTML += `
    <li>
    <div>
    <input type="checkbox" name="" id="">
    <div id="list${work.index}">${work.description}</div>
    </div>
    <span class="material-symbols-outlined">more_vert</span>
    </li>
    `;

  });
import { mainContent } from "./dom";
import '../styles/tasks.css';

let taskArr = [];

const tasksContent = document.createElement('div');
tasksContent.setAttribute('id', 'tasks-content');

const checkCircle = () => {
  const circle = document.createElement('div');
  circle.classList.add('check-circle');

  circle.addEventListener('click', () => {
    if (circle.classList.contains('circle-checked')) {
      circle.classList.remove('circle-checked');
    } else {
      circle.classList.add('circle-checked');
    }
  });

  return circle;
}

// to finish later
/*
function taskEdit(div) {
  console.log(`div id is ${div.getAttribute('id')}`);
  console.log('task edit button');
  displayTasks();
}
*/

function taskDelete(div) {
  let left = taskArr.slice(0, parseInt(div.getAttribute('data-taskid')));
  let right = taskArr.slice(parseInt(div.getAttribute('data-taskid'))+1, taskArr.length);
  taskArr = left.concat(right);
  displayTasks();
}

const button = (btnName, func, div) => {
  const btn = document.createElement('img');
  btn.setAttribute('src', `./svg/${btnName}.svg`);
  btn.setAttribute('height', '18px');
  btn.addEventListener('click', () => {
    func(div);
  });
  
  return btn;
}

const task = (name, description) => {
  const div = document.createElement('div');
  div.classList.add('task');

  const nameDivChild = document.createElement('div');
  nameDivChild.textContent = name;

  const taskButtons = document.createElement('div');
  taskButtons.classList.add('task-buttons');
  // taskButtons.appendChild(button('edit', taskEdit, div));
  taskButtons.appendChild(button('delete', taskDelete, div));
  
  const nameDiv = document.createElement('div');
  nameDiv.classList.add('task-name');
  nameDiv.appendChild(checkCircle());
  nameDiv.appendChild(nameDivChild);
  nameDiv.appendChild(taskButtons);

  const descDiv = document.createElement('div');
  descDiv.textContent = description;
  descDiv.classList.add('task-description');

  div.appendChild(nameDiv);
  div.appendChild(descDiv);

  return {div};
}

for (let i = 0; i < 3; i++) {
  taskArr.push(task(`task ${i}`, `desc`));
}

export function displayTasks() {
  // clear main content
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }

  // clear tasks content
  while (tasksContent.firstChild) {
    tasksContent.removeChild(tasksContent.lastChild);
  }

  // add contents of taskArr to tasks content
  let index = 0;
  for (const arr of taskArr) {
    arr.div.setAttribute('data-taskid', `${index}`);
    tasksContent.appendChild(arr.div);
    index++;
  };

  mainContent.appendChild(tasksContent)
}


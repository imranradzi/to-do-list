import { button, display, deleteBtn } from "./content";
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
  taskArr = deleteBtn('task', div, taskArr);
  displayTasks();
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
  display('task', tasksContent, taskArr);
}


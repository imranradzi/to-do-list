import { mainContent } from "./dom";
import '../styles/tasks.css';

const tasksContent = document.createElement('div');
tasksContent.setAttribute('id', 'tasks-content');;

const task = (name, description) => {
  const div = document.createElement('div');
  div.classList.add('task');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = name;
  nameDiv.classList.add('task-name');

  const descDiv = document.createElement('div');
  descDiv.textContent = description;
  descDiv.classList.add('task-description');

  div.appendChild(nameDiv);
  div.appendChild(descDiv);

  return {div};
}

let taskArr = [];

for (let i = 0; i < 20; i++) {
  taskArr.push(task(`task${i}`, `desc${i}`));
}

export function displayTasks() {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  mainContent.appendChild(tasksContent)
  for (const arr of taskArr) {
    tasksContent.appendChild(arr.div);
  };
}


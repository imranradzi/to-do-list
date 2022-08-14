import { display, taskArr, contentItem } from "./content";
import '../styles/tasks.css';

const tasksContent = document.createElement('div');
tasksContent.setAttribute('id', 'tasks-content');

const task = (name, description) => {
  return contentItem('task', name, description);
}

for (let i = 0; i < 3; i++) {
  taskArr.push(task(`task ${i}`, `desc`));
}

export function displayTasks() {
  display('task', tasksContent, taskArr);
}


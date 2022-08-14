import { display } from "./content";
import '../styles/tasks.css';

const tasksContent = document.createElement('div');
tasksContent.setAttribute('id', 'tasks-content');

export function displayTasks() {
  display('task', tasksContent,
  JSON.parse(localStorage.getItem('taskArray')));
}


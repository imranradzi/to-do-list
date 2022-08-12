import { sidebar } from './dom';
import { displayTasks } from './tasks';
import { displayNotes } from './notes';
import '../styles/sidebar.css';

function sideBtn(name, func) {
  const div = document.createElement('div');
  div.textContent = name;
  div.setAttribute('id', name);
  div.addEventListener('click', (e) => {
    func();
    // adds sidebar-clicked class to clicked button
    // which then highlights the button
    if (e.target == div) {
      for (const btn of sideBtnArr) {
        if (btn != div) {
          btn.classList.remove('sidebar-clicked');
        }
      }
      div.classList.add('sidebar-clicked');
    };
  });
  return div;
}

const sideBtnArr = [sideBtn('tasks', displayTasks),
              sideBtn('notes', displayNotes)];

export function displaySideBtn() {
  for (const btn of sideBtnArr) {
    sidebar.appendChild(btn);
  }
}
import { sidebar } from './dom';
import '../styles/sidebar.css';

function sideBtn(name, func) {
  const div = document.createElement('div');
  div.textContent = name;
  div.setAttribute('id', name);
  div.addEventListener('click', func);
  return div;
}

// to change
const now = new Date();
const dummy = () => {
  console.log('button pressed');
};

const sideBtnArr = [sideBtn('tasks', dummy),
              sideBtn('notes', dummy)];

export function displaySideBtn() {
  for (const btn of sideBtnArr) {
    sidebar.appendChild(btn);
  }
}
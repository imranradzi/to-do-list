import { mainContent } from "./dom";
import '../styles/notes.css';

let noteArr = [];

const notesContent = document.createElement('div');
notesContent.setAttribute('id', 'notes-content');
notesContent.textContent = 'notes go here';

function noteDelete(div) {
  let left = taskArr.slice(0, parseInt(div.getAttribute('data-noteid')));
  let right = taskArr.slice(parseInt(div.getAttribute('data-noteid'))+1, noteArr.length);
  noteArr = left.concat(right);
  displayNotes();
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

const note = (name, description) => {
  const div = document.createElement('div');
  div.classList.add('note');

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('note-name');
  nameDiv.textContent = name;

  const descDiv = document.createElement('div');
  descDiv.classList.add('note-description');
  descDiv.textContent = description;

  div.appendChild(nameDiv);
  div.appendChild(descDiv);

  return {div};
}

for (let i = 0; i < 5; i++) {
  noteArr.push(note(`note ${i}`, `description ${i}`));
}

export function displayNotes() {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }

  // clear notes content
  while (notesContent.firstChild) {
    notesContent.removeChild(notesContent.lastChild);
  }

  // add contents of taskArr to tasks content
  let index = 0;
  for (const arr of noteArr) {
    arr.div.setAttribute('data-noteid', `${index}`);
    notesContent.appendChild(arr.div);
    index++;
  };

  mainContent.appendChild(notesContent);
}
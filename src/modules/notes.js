import { button, display, deleteBtn } from "./content";
import '../styles/notes.css';

let noteArr = [];

const notesContent = document.createElement('div');
notesContent.setAttribute('id', 'notes-content');
notesContent.textContent = 'notes go here';

function noteDelete(div) {
  noteArr = deleteBtn('note', div, noteArr);
  displayNotes();
}

const note = (name, description) => {
  const div = document.createElement('div');
  div.classList.add('note');

  const noteButtons = document.createElement('div');
  noteButtons.classList.add('note-buttons');
  // noteButtons.appendChild(button('edit', noteEdit, div));
  noteButtons.appendChild(button('delete', noteDelete, div));

  const nameDivChild = document.createElement('div');
  nameDivChild.textContent = name;

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('note-name');
  nameDiv.appendChild(nameDivChild);
  nameDiv.appendChild(noteButtons);

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
  display('note', notesContent, noteArr);
}
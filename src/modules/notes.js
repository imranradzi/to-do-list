import { display, noteArr, contentItem } from "./content";
import '../styles/notes.css';

const notesContent = document.createElement('div');
notesContent.setAttribute('id', 'notes-content');
notesContent.textContent = 'notes go here';

const note = (name, description) => {
   return contentItem('note', name, description);
}

for (let i = 0; i < 5; i++) {
  noteArr.push(note(`note ${i}`, `description ${i}`));
}

export function displayNotes() {
  display('note', notesContent, noteArr);
}
import { mainContent } from "./dom";

const notesContent = document.createElement('div');
notesContent.textContent = 'notes go here';

export function displayNotes() {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  mainContent.appendChild(notesContent);
}
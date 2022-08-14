import { display } from "./content";
import '../styles/notes.css';

const notesContent = document.createElement('div');
notesContent.setAttribute('id', 'notes-content');

export function displayNotes() {
  display('note', notesContent,
  JSON.parse(localStorage.getItem('noteArray')));
}
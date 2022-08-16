import { mainContent, addContentDiv,addContentDesc, addContentName } from "./dom";
import '../styles/content.css';

let noteArr = [{'name': 'Note 1',
                      'description': 'Description 1'},
                      {'name': 'Note 2',
                      'description': 'Description 2'}];

let taskArr = [{'name': 'Task 1',
                        'description': 'Description 1'},
                      {'name': 'Task 2',
                        'description': 'Description 2'}];

if (!localStorage.getItem('noteArray')) {
  localStorage.setItem('noteArray', JSON.stringify(noteArr));
}
if (!localStorage.getItem('taskArray')) {
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}

export const button = (btnName, func, div) => {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'image');
  btn.setAttribute('src', `./svg/${btnName}.svg`);
  btn.setAttribute('height', '24px');
  btn.addEventListener('click', () => {
    func(div);
  });
  
  return btn;
} 

export const checkCircle = () => {
  const circle = document.createElement('button');
  circle.classList.add('check-circle');

  circle.addEventListener('click', () => {
    if (circle.classList.contains('circle-checked')) {
      circle.classList.remove('circle-checked');
    } else {
      circle.classList.add('circle-checked');
    }
  });

  return circle;
}

const addButtonDiv = document.createElement('div');
addButtonDiv.setAttribute('id', 'plus');
addButtonDiv.appendChild(button('plus', showAddContent));

export function display(contentName, contentDiv, contentArr) {
  // clears main content
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }

  // clear content div
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  // add contents of content array to content div 
  let index = 0;
  for (const content of
    JSON.parse(localStorage.getItem(`${contentName}Array`))) {
    let contentObj = contentItem(contentName, content['name'], content['description']);
    contentObj.div.setAttribute(`data-${contentName}id`, `${index}`);
    contentDiv.appendChild(contentObj.div);
    index++;
  };

  addButtonDiv.setAttribute('data-content', contentName);
  contentDiv.appendChild(addButtonDiv);
  mainContent.appendChild(contentDiv);
}

// returns an array where div in question is deleted
export function deleteBtn(contentName, div, contentArr) {
  let left = contentArr.slice(0, parseInt(div.getAttribute(`data-${contentName}id`)));
  let right = contentArr.slice(parseInt(div.getAttribute(`data-${contentName}id`))+1, contentArr.length);
  let newArr = left.concat(right);
  return newArr;
}

function removeContentValues() {
  addContentName.value = '';
  addContentDesc.value = '';
}

function showAddContent() {
  addContentDiv.style.display = 'flex';
}

function removeAddContent() {
  addContentDiv.style.display = 'none';
  removeContentValues();
}

function getAddContentValues() {
  return [addContentName.value,
          addContentDesc.value];
}

function addContentToArr(contentType) {
  let itemName = getAddContentValues()[0];
  let itemDesc = getAddContentValues()[1];
  let arr = JSON.parse(localStorage.getItem(`${contentType}Array`));
  arr.push({'name': itemName, 'description': itemDesc});
  localStorage.setItem(`${contentType}Array`, JSON.stringify(arr));
}

document
  .querySelector('#add-content-close')
  .addEventListener('click', removeAddContent);

document
  .querySelector('#add-content-check')
  .addEventListener('click', () => {
    let contentType = document
                      .querySelector('#plus')
                      .getAttribute('data-content');

    if (contentType === 'note') {
        addContentToArr(contentType, noteArr);
        display('note', document.querySelector(`#${contentType}s-content`), noteArr);
    } else if (contentType === 'task') {
        addContentToArr(contentType, taskArr);
        display('task', document.querySelector(`#${contentType}s-content`), taskArr)
    }
    
    removeContentValues();
    removeAddContent();
  });

  export const contentItem = (contentType, name, description) => {
    const div = document.createElement('div');
    div.classList.add(`${contentType}`); // 
  
    const nameDivChild = document.createElement('div');
    nameDivChild.textContent = name;
  
    function deleteDiv(div) {
      if (contentType === 'note') {
        localStorage.setItem('noteArray',
        JSON.stringify(deleteBtn('note', div,
        JSON.parse(localStorage.getItem('noteArray')))));
        display('note', div.parentNode,
        JSON.parse(localStorage.getItem('noteArray')));
      } else if (contentType === 'task') {
        localStorage.setItem('taskArray',
        JSON.stringify(deleteBtn('task', div,
        JSON.parse(localStorage.getItem('taskArray')))));
        display('task', div.parentNode,
        JSON.parse(localStorage.getItem('taskArray')));
      }
    }
  
    const buttons = document.createElement('div');
    buttons.classList.add(`${contentType}-buttons`);
    buttons.appendChild(button('delete', deleteDiv, div));
  
    const nameDiv = document.createElement('div');
    nameDiv.classList.add(`${contentType}-name`);
    nameDiv.appendChild(checkCircle());
    nameDiv.appendChild(nameDivChild);
    nameDiv.appendChild(buttons);
  
    const descDiv = document.createElement('div');
    descDiv.classList.add(`${contentType}-description`);
    descDiv.textContent = description;
  
    div.appendChild(nameDiv);
    div.appendChild(descDiv);
  
    return {div};
  }


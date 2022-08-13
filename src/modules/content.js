import { mainContent } from "./dom";

export const button = (btnName, func, div) => {
  const btn = document.createElement('img');
  btn.setAttribute('src', `./svg/${btnName}.svg`);
  btn.setAttribute('height', '18px');
  btn.addEventListener('click', () => {
    func(div);
  });
  
  return btn;
} 

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
  for (const arr of contentArr) {
    arr.div.setAttribute(`data-${contentName}id`, `${index}`);
    contentDiv.appendChild(arr.div);
    index++;
  };

  mainContent.appendChild(contentDiv);
}

// returns an array where div in question is deleted
export function deleteBtn(contentName, div, contentArr) {
  let left = contentArr.slice(0, parseInt(div.getAttribute(`data-${contentName}id`)));
  let right = contentArr.slice(parseInt(div.getAttribute(`data-${contentName}id`))+1, contentArr.length);
  let newArr = left.concat(right);
  return newArr;
}





import { header } from './dom';
import '../styles/header.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];

const months = ['Jan', 'Feb', 'March', 'April', 'May',
                'June', 'July', 'Aug', 'Sept', 'Oct',
                'Nov', 'Dec'];

export function showTime() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let day = now.getDay();
  const time = document.createElement('div');

  time.setAttribute('id', 'time');
  time.textContent =  `${days[day-1]} ${date} ${months[month]} ${year}`;

  header.appendChild(time);
}


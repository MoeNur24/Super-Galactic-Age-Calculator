import './css/styles.css';
import { SpaceAge } from './Super-Galactic.js';


document.getElementById('space-age-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const pastBirthday = parseInt(document.getElementById('past-birthday').value, 10);
  const futureBirthday = parseInt(document.getElementById('future-birthday').value, 10);

  const spaceAge = new SpaceAge(age);
import _ from 'lodash';
import './css/style.css';
import './img/mix.png';
import Icon from './img/icon.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Add Bootstrap5 classes
    element.classList.add('hello', 'container' , 'my-5');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());
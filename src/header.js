import Icon from './images/icon.png';
import { switchPages, iconSwitch } from './index';


export default function createHeader() {
    const header = document.createElement('header');
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.addEventListener('click', iconSwitch);

    const nav = document.createElement('nav');
    const buttons = ['Home', 'Menu', 'Contact'];
    buttons.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('nav-buttons');
        button.textContent = item;
        button.addEventListener('click', switchPages);
        nav.appendChild(button);
    });
    header.appendChild(myIcon);
    header.appendChild(nav);

    return header
}
import "./style.scss";
import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import createFooter from "./footer";

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const main = document.createElement('main');


export const switchPages = (e) => {
    const second = document.querySelector('main :first-child');
    const item = e.target.textContent;
    if (item === 'Menu') {
        second.remove();
        main.appendChild(createMenu());
    } else if (item === 'Home') {
        second.remove();
        main.appendChild(createHome());
    } else {
        second.remove();
        main.appendChild(createContact());
    }
}

export const iconSwitch = () => {
    const second = document.querySelector('main :first-child');
    second.remove();
    main.appendChild(createHome());
}

container.appendChild(createHeader());
container.appendChild(main);
container.appendChild(createFooter());
main.appendChild(createHome());
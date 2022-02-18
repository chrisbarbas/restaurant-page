import menuIMG from './images/menu.jpg';

export default function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTop = document.createElement('div');
    menuTop.classList.add('menu-top');

    const menuImage = new Image();
    menuImage.src = menuIMG;
    menuImage.classList.add('menu-image');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    menuTop.appendChild(menuImage);
    menuTop.appendChild(h1);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const array = [{
            number: 1,
            name: 'Cucumber Roll',
            contents: 'Cucumber and avocado',
            price: '$5.00'
        },
        {
            number: 2,
            name: 'Sweet Potato Roll',
            contents: 'Sweet Potato and avocado',
            price: '$5.00'
        },
        {
            number: 3,
            name: 'California Roll',
            contents: 'Crab meat, cucumber, and avocado',
            price: '$6.00'
        },
        {
            number: 4,
            name: 'Boston Roll',
            contents: 'Shrimp, cucumber, and avocado',
            price: '$6.00'
        },
        {
            number: 5,
            name: 'Philadelphia Roll*',
            contents: 'Salmon, avocado, and cream cheese',
            price: '$6.00'
        },
        {
            number: 6,
            name: 'Spider Roll',
            contents: 'Tempura soft-shell crab, cucumber, avocado, and spicy mayo',
            price: '$8.00'
        },
        {
            number: 7,
            name: 'Dragon Roll',
            contents: 'Eel, cucumber, crab sticks, eel sauce, and avocado',
            price: '$8.00'
        },
        {
            number: 8,
            name: 'Rainbow Roll*',
            contents: 'Salmon, cucumber, spicy mayo, crab, avocado, and tobiko',
            price: '$8.00'
        }
    ]

    array.forEach((ele) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        Object.keys(ele).forEach((key) => {
            const p = document.createElement('p');
            p.textContent = ele[key];
            menuItem.appendChild(p);
        });
        menuContainer.appendChild(menuItem);
    });

    menu.appendChild(menuTop);
    menu.appendChild(menuContainer);
    return menu;
}
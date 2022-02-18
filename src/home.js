import homeIMG from './images/home.jpg';

export default function createHome() {
    const home = document.createElement('div');
    const landingImage = new Image();
    landingImage.src = homeIMG;
    landingImage.classList.add('landing-image');

    home.classList.add('home');
    const h1 = document.createElement('h1');
    h1.textContent = 'Golden Koi Sushi';


    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.appendChild(h1);
    homeContainer.appendChild(landingImage)

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container')
    const h2 = document.createElement('h2');
    h2.textContent = 'About';
    aboutContainer.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    aboutContainer.appendChild(p);


    home.appendChild(homeContainer);
    home.appendChild(aboutContainer);
    return home;
}
export default function createFooter() {
    const footer = document.createElement('footer');

    const h3 = document.createElement('h3');
    h3.textContent = 'Golden Koi Sushi';

    const link = document.createElement('a');
    link.textContent = 'Japan icons created by Freepik - Flaticon';
    link.href = 'https://www.flaticon.com/free-icons/japan';

    footer.appendChild(h3);
    footer.appendChild(link);
    return footer
}
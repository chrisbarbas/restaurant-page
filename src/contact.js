import contactIMG from './images/contact.jpg';

export default function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTop = document.createElement('div');
    contactTop.classList.add('contact-top');

    const contactImage = new Image();
    contactImage.src = contactIMG;
    contactImage.classList.add('contact-image');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';

    contactTop.appendChild(contactImage);
    contactTop.appendChild(h1);


    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');


    const array = [{
            title: 'Address',
            street: '303 fake street',
            city: 'San Diego, CA',
            areaCode: '92101'
        },
        {
            title: 'Hours',
            timeone: 'Monday - Thursday: 11:30 am - 9:30 pm',
            timetwo: 'Friday - Saturday: 11:30 am - 10 pm',
            timethree: 'Sunday: 12 pm - 9 pm'
        },
        {
            title: 'Contact Us',
            phone: 'Phone: (123) 456-7890',
            email: 'Email: goldenkoisushi@example.com'
        }
    ]
    array.forEach((ele) => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');

        Object.keys(ele).forEach((key) => {
            const p = document.createElement('p');
            p.textContent = ele[key];
            contactItem.appendChild(p);
        });
        contactContainer.appendChild(contactItem);
    });


    contact.appendChild(contactTop);
    contact.appendChild(contactContainer);
    return contact;
}
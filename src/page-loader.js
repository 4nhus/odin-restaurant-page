import Burger from "./burger.jpg";

const body = document.querySelector('body');
const content = document.getElementById('content');

function loadNavigation() {
    const navigation = document.createElement('div');
    navigation.id = 'navigation';

    const mainButton = document.createElement('button');
    mainButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'main') {
            content.removeChild(content.firstChild);
            loadMainPage();
        }
    });

    // Add new page when loader is created
    const contactButton = document.createElement('button');
    contactButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'contact') {
            content.removeChild(content.firstChild);
            loadMainPage();
        }
    });

    // Add new page when loader is created
    const menuButton = document.createElement('button');
    menuButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'menu') {
            content.removeChild(content.firstChild);
            loadMainPage();
        }
    });

    navigation.appendChild(mainButton);
    navigation.appendChild(contactButton);
    navigation.appendChild(menuButton);
    body.appendChild(navigation);
}

function loadMain() {
    const image = document.createElement('img');
    image.src = Burger;

    const heading = document.createElement('h1');
    heading.innerText = 'Welcome to Bob\'s Bodacious Burgers, where every bite is a flavor explosion and every meal is a celebration\n' +
        '            of all things delicious!';

    const copy = document.createElement('p');
    copy.innerText = 'At Bob\'s, we\'re not just passionate about burgers; we\'re obsessed. Our chefs craft each burger with love and\n' +
        '            attention, using only the finest ingredients to create mouthwatering masterpieces that will leave your taste\n' +
        '            buds begging for more.';

    loadSection([image, heading, copy], 'main');
}

function loadSection(sectionDivs, sectionId) {
    const section = document.createElement('div');
    sectionDivs.forEach(div => {
        section.appendChild(div);
    });
    section.id = sectionId;

    content.appendChild(section);
}

export {loadNavigation, loadMain};
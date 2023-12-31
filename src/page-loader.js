import Burger from "./burger.jpg";

const body = document.querySelector('body');
const content = document.getElementById('content');
const image = document.createElement('img');
image.src = Burger;

function clearContent() {
    content.removeChild(content.firstChild);
}

function loadNavigation() {
    const navigation = document.createElement('div');
    navigation.id = 'navigation';

    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'home') {
            clearContent();
            loadHome();
        }
    });

    // Add new page when loader is created
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    contactButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'contact') {
            clearContent();
            loadContact();
        }
    });

    // Add new page when loader is created
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.addEventListener('click', () => {
        if (content.children.item(0).id !== 'menu') {
            clearContent();
            loadMenu();
        }
    });

    navigation.appendChild(homeButton);
    navigation.appendChild(contactButton);
    navigation.appendChild(menuButton);
    body.prepend(navigation);
}

function loadHome() {
    const heading = document.createElement('h1');
    heading.innerText = 'Welcome to Bob\'s Bodacious Burgers, where every bite is a flavor explosion and every meal is a celebration' +
        '            of all things delicious!';

    const copy = document.createElement('p');
    copy.innerText = 'At Bob\'s, we\'re not just passionate about burgers; we\'re obsessed. Our chefs craft each burger with love and' +
        '            attention, using only the finest ingredients to create mouthwatering masterpieces that will leave your taste' +
        '            buds begging for more.';

    loadSection([image, heading, copy], 'home');
}

function loadContact() {
    const contactForm = document.createElement('div');
    contactForm.innerHTML = '<form action="" id="form">\n' +
        '        <h3>Let\'s do this!</h3>\n' +
        '        <div class="form-info">\n' +
        '            <ul>\n' +
        '                <li><label for="first-name">FIRST NAME *:</label>\n' +
        '                    <input type="text" id="first-name" name="first-name" required></li>\n' +
        '                <li><label for="email">EMAIL *:</label>\n' +
        '                    <input type="email" id="email" name="email" required></li>\n' +
        '            </ul>\n' +
        '            <ul>\n' +
        '                <li><label for="last-name">LAST NAME *:</label>\n' +
        '                    <input type="text" id="last-name" name="last-name" required></li>\n' +
        '                <li><label for="phone-number">PHONE NUMBER:</label>\n' +
        '                    <input type="number" id="phone-number" name="phone-number"></li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </form>';

    const contactButton = document.createElement('button');
    contactButton.innerText = "Submit"

    loadSection([image, contactForm, contactButton], 'contact');
}

function loadMenu() {
    const menu = document.createElement('div');
    menu.id = 'burger-menu';

    const burgerFactory = function (name, info, price) {
        const burger = document.createElement('div');
        burger.classList.add('burger');
        const burgerName = document.createElement('h2');
        burgerName.innerText = name;
        const burgerInfo = document.createElement('p');
        burgerInfo.innerText = info;
        const burgerPrice = document.createElement('p');
        burgerPrice.innerText = `Price: ${price}`;
        burgerPrice.classList.add('price')
        burger.appendChild(burgerName);
        burger.appendChild(burgerInfo);
        burger.appendChild(burgerPrice);
        return burger;
    }

    const theTexan = burgerFactory('The Texan', 'All american, all delicious. Featuring maple bacon, two giant fried chicken fillets, onion rings, pickles, smoky BBQ sauce - all between two of the finest Texan brioche buns!', '$25');
    const bobsBasicBurger = burgerFactory('Bob\'s Basic', 'A basic hamburger.', '$10');
    const bobsBestBurger = burgerFactory('Bob\'s Best', 'A deluxe hamburger with everything grown and made in-house; we have a 25000 hectare farm just for this...', '$35');
    menu.appendChild(theTexan);
    menu.appendChild(bobsBasicBurger);
    menu.appendChild(bobsBestBurger);

    loadSection([image, menu], 'menu');
}

function loadSection(sectionDivs, sectionId) {
    const section = document.createElement('div');
    sectionDivs.forEach(div => {
        section.appendChild(div);
    });
    section.id = sectionId;

    content.appendChild(section);
}

export {loadNavigation, loadHome};
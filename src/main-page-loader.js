import Burger from './burger.jpg';

function load() {
    const content = document.getElementById('content');

    const image = document.createElement('img');
    image.src = Burger;


    const heading = document.createElement('h1');
    heading.innerText = 'Welcome to Bob\'s Bodacious Burgers, where every bite is a flavor explosion and every meal is a celebration\n' +
        '            of all things delicious!';

    const copy = document.createElement('p');
    copy.innerText = 'At Bob\'s, we\'re not just passionate about burgers; we\'re obsessed. Our chefs craft each burger with love and\n' +
        '            attention, using only the finest ingredients to create mouthwatering masterpieces that will leave your taste\n' +
        '            buds begging for more.';

    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(copy);
}

export default load;
import {NUMBER_OF_CARDS} from '../helpers/constants';
import createElement from '../helpers/utils';
import cards from '../data/cards';

const AsideMenu = () => {
    const menuBackground = createElement('div', 'menu_back');
    const asideContainer = createElement('div', 'menu');
        asideContainer.classList.add('hidden');
    const menu = document.createElement('ul');
    const mainLink = createElement('li', 'main-link', 'Main page');
        mainLink.id = 'main';
        menu.append(mainLink);
    const statsLink = createElement('li', 'stats-link', 'Statistics');
        statsLink.id = 'stats';
    
    for (let i = 0; i < NUMBER_OF_CARDS; i += 1) {
        const link = document.createElement('li');
            link.textContent = `${cards[0][i]}`;
            link.id = `${cards[0][i]}`;
        menu.append(link);
    }
    
    menu.append(statsLink);
    menuBackground.append(asideContainer);
    asideContainer.append(menu);

    return menuBackground;
};

export default AsideMenu;
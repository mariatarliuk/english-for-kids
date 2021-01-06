import CardsCategories from '../components/cardsCategories';
import data from '../data/cards';
import {NUMBER_OF_CARDS, PLAY_MODE, TRAIN_MODE, START} from '../helpers/constants';
import createElement from '../helpers/utils';
import AsideMenu from '../components/asideMenu';

class MainPage {
    constructor(train, play) {
        this.train = train;
        this.play = play;
    }

    createNav() {
        const title = createElement('h1', 'title','English for kids' );
        const burger = createElement('div', 'burger');
        const burgerButton = createElement('div', 'burger-button');
            burgerButton.addEventListener('click', ()=>{
                burgerButton.classList.toggle('active');
            });
        const button = createElement('div', 'switch_button');
        const switchInput = createElement('input', 'checkbox');
            switchInput.type = 'checkbox';
            switchInput.id = 'checkbox';
        const label = createElement('label', 'checkbox-label');
            label.setAttribute('for', 'checkbox');     
        const spanPlay = createElement('span', 'play', PLAY_MODE);
            spanPlay.classList.add('none');
        const spanTrain = createElement('span', 'train', TRAIN_MODE);
        const switchBack = createElement('span', 'switch_back');
        const startButton = createElement('div', 'start-button', START);
        const repeat = createElement('div', 'repeat');
            repeat.classList.add('hidden');
        const iconRepeat = createElement('div', 'icon-repeat');
        const likesContainer = createElement('div', 'likes_container');
        const nav = createElement('header', 'header');
        const container = createElement('div', 'container-inner');
        const mainSection = document.createElement('main');
        const footer = createElement('footer', 'footer');
        const linkGit = createElement('a', 'link-footer');
            linkGit.href = 'https://github.com/mariatarliuk';
            linkGit.target = '_blank';
        const imageGit = createElement('img', 'image-footer');
            imageGit.src = './img/github.svg';
        const linkSchool = createElement('a', 'link-footer');
            linkSchool.href = 'https://rs.school/js/';
            linkSchool.target = '_blank';
        const imageSchool = createElement('img', 'image-footer');
            imageSchool.src = './img/rs_school.svg';

        button.append(switchInput);
        button.append(label);
        button.append(spanTrain);
        button.append(spanPlay);
        button.append(switchBack);
        burgerButton.append(burger);
        nav.append(burgerButton);
        nav.append(title);
        nav.append(startButton);
        repeat.append(iconRepeat);
        nav.append(repeat);
        nav.append(button);
        nav.append(likesContainer);
        nav.append(AsideMenu());
        container.append(nav);
        document.body.append(container);
        linkGit.append(imageGit);
        linkSchool.append(imageSchool);
        footer.append(linkGit);
        footer.append(linkSchool);
        document.querySelector('.container-inner').append(mainSection);
        document.querySelector('.container-inner').append(footer);
        this.funcName = 'createNav';
    }

    createTopics() {
        for (let i=0; i < NUMBER_OF_CARDS; i += 1) {
            const categories = new CardsCategories(data[0][i], data[1][i], data[2][i], undefined, undefined, 
                undefined, this.train, this.play);
            categories.createCategories();
        }
    }

}

export default MainPage;
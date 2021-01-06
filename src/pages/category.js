import CardsCategories from '../components/cardsCategories';
import data from '../data/cards';
import { NUMBER_OF_CARDS, DIFFERENCE, ARRAY_OF_TOPICS } from '../helpers/constants';
import createElement from '../helpers/utils';

class CategoryPage {
    constructor(section, train, play) {
        this.section = section;
        this.train = train;
        this.play = play;
    }

    createSection() {
        if (this.play) {
            document.querySelector('.start-button').classList.add('visible');
        }

        const index = (data[ARRAY_OF_TOPICS].indexOf(this.section) + DIFFERENCE);
        
        for (let i = 0; i < NUMBER_OF_CARDS; i += 1) {
            const categories = new CardsCategories(data[index][i].word, data[index][i].image, undefined, 
                true, data[index][i].translation, data[index][i].audioSrc, this.train, this.play);
            categories.createCategories();
        }

        const finishMessage = createElement('div', 'finish-message');
        const text = createElement('div', 'text-finish');
        const description = createElement('div', 'description');
        finishMessage.append(text);
        finishMessage.append(description);
        document.querySelector('main').append(finishMessage);
    }
}

export default CategoryPage;
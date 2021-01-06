import Card from './card';

class CardsCategories {
    constructor(description, images, background = 'white', turn = false, translation = false, audio = false,
    train, play) {
        this.description = description;
        this.images = images;
        this.background = background;
        this.turn = turn;
        this.translation = translation;
        this.audio = audio;
        this.train = train;
        this.play = play;
    }

    createCategories() {
        const card = new Card(this.description, this.images, this.background, this.turn, this.translation, 
            this.audio, this.train, this.play);
        document.querySelector('main').append(card);
    }   
}

export default CardsCategories;
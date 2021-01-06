import createElement from '../helpers/utils';

const Card = (description, images, background, turn = false, translation = false, 
    audio = false, train, play) => {

    const cardContainer = createElement('div', 'card-container');
        cardContainer.id = description;
    const cardBox = createElement('div', 'card-box');
    const imageContainer =  createElement('div', 'image-container');
        imageContainer.style.background = background;
    const cardImage = createElement('div', 'card-image');
        cardImage.style.backgroundImage = `url(./${images})`;
    const subscription = createElement('div', 'subscription', description);
    
    imageContainer.append(cardImage);
    cardBox.append(imageContainer);
    cardBox.append(subscription);
    cardContainer.append(cardBox);
                
    if (play) {
        subscription.classList.add('hidden');
        cardImage.classList.add('play');
    }

    if (audio) {
        cardContainer.addEventListener('click', (e) => {
            if (train) {
                if (e.target.className !== 'turn-button') {
                    const audioButton = new Audio();
                        audioButton.src = audio;
                        audioButton.play();
                }
                const obj = JSON.parse(localStorage.getItem(e.currentTarget.id));
                    obj.watched += 1;
                localStorage.setItem(e.currentTarget.id, JSON.stringify(obj));
            }
        })
    }
        
    if(turn) {
        let box;
        const turnButton = createElement('span', 'turn-button');

        turnButton.addEventListener('click', () => {
            const subscr = turnButton.parentElement;
                subscr.parentElement.classList.add('turned');
            box = subscr.parentElement;

            setTimeout(() => {
                subscr.textContent = translation;
                subscr.classList.add('turned');
            }, 100);

            box.addEventListener('mouseleave', () => {
                subscr.parentElement.classList.remove('turned');
                setTimeout(() => {
                    subscr.textContent = description;
                    subscr.append(turnButton);
                    subscr.classList.remove('turned');
                }, 200);
            });
        });   

        subscription.append(turnButton);
    }
    return cardContainer; 
}

export default Card;

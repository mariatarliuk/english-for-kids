import MainPage from './pages/main';
import StatsPage from './pages/stats';
import CategoryPage from './pages/category';
import CardsCategories from './components/cardsCategories';
import data from './data/cards';
import { DIFFERENCE, ARRAY_OF_TOPICS,ERROR_SOUND, CORRECT_SOUND, FAILURE_SOUND, SUCCESS_SOUND, NUMBER_OF_CARDS, EXAMPLE_WORD } from './helpers/constants'

let play = false;
let train = true;
let topic = '';
let words = [];
let numAudio = 0;
let repeatWord = '';

function changeMode() {
    if(topic !== '') {
        document.querySelector('main').innerHTML = '';
        const category = new CategoryPage(topic, train, play);
        category.createSection();
    }
}

function goUp() {
   const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollTo(0, 0);
   }
}

function chooseCards() {
    document.querySelectorAll('.card-container').forEach(item => {
        let section = '';
        item.addEventListener('click', () => {
            goUp();
            section = item.id;
            localStorage.setItem('section', item.id);
            topic = section;
            document.querySelector('main').innerHTML = '';
            const category = new CategoryPage(section, train, play);
                category.createSection();
        })
    })
}

function musicPlay(src) {
    const audioButton = new Audio();
        audioButton.src = src;
        audioButton.play();
}

function turnOn() {
    if (numAudio < words.length) {
        setTimeout(() => {
            musicPlay(words[numAudio]);
            repeatWord = words[numAudio].slice(6, -4);
        }, 300);
    }
}

function repeatDifficultWord() {
    const difficultArr = [];
    const wordsList = [];
    const wordsTranslation = [];
    const wordsCategory = [];
    let array = [];
    const table = document.querySelector('table');
    for (let i = 0; i < table.rows.length; i +=1 ) {
        if (+table.rows[i].cells[5].innerHTML !== 0) {
            difficultArr.push(+table.rows[i].cells[5].innerHTML);  
            wordsList.push(table.rows[i].cells[1].innerHTML);
            wordsTranslation.push(table.rows[i].cells[2].innerHTML);
            wordsCategory.push(table.rows[i].cells[0].innerHTML.split(' ').join(''));
        }
    }
    difficultArr.sort((a,b) => b - a);
    for (let i=0; i<difficultArr.length; i +=1 ) {
        array.push([wordsList[i], wordsTranslation[i], wordsCategory[i]]);
    }
    array = array.splice(0, 8);
    return array;
}

function localStorageReset() {
    const obj = {'watched': 0, 'right': 0, 'wrong': 0};
    for (let i = 3; i < 11; i +=1 ) {
        for (let j = 0; j < NUMBER_OF_CARDS; j += 1) {
            localStorage.setItem(data[i][j].word, JSON.stringify(obj));
        }
    }
}

function hideAdditions() {
    document.querySelector('.menu').classList.add('hidden');
    document.querySelector('.burger-button').classList.remove('active');
    document.querySelector('.menu_back').classList.remove('open');
    setTimeout(() => {
        document.body.classList.remove('hidden_scroll');
    },1000);
    document.querySelector('.likes_container').innerHTML = '';
    document.querySelector('.repeat').classList.add('hidden');
}

const main = new MainPage(train, play);

function finishGame() {
    if (document.querySelectorAll('.like.error').length === 0) {
        musicPlay(SUCCESS_SOUND);
        document.querySelector('.description').innerHTML = 'Well done!';
        document.querySelector('.text-finish').classList.add('success');                  
    } else {
        musicPlay(FAILURE_SOUND);
        document.querySelector('.description').classList.add('failure')
        document.querySelector('.description').innerHTML = `Oh nooo, ${document.querySelectorAll('.like.error').length} mistake(s)`;
        document.querySelector('.text-finish').classList.add('failure');  
    }
    document.querySelector('.finish-message').classList.add('show');
    setTimeout(() => {
        document.querySelector('.finish-message').classList.remove('show');
        document.querySelector('.likes_container').innerHTML = '';
        document.querySelector('.repeat').classList.add('hidden');
        document.querySelector('main').innerHTML = '';
    main.createTopics();
    chooseCards();
    topic = '';
    },3000);
}

function selectStats() {
    document.querySelector('main').innerHTML = '';
    const stats = new StatsPage();
        stats.createSection();
    topic = '';
    document.querySelector('.buttons.repeat-word').addEventListener('click', () =>{
        const difficultWords = repeatDifficultWord();
        document.querySelector('main').innerHTML = '';
        if (difficultWords.length === 0) {
            document.querySelector('.container-inner').classList.add('bg-height');
        }
        for (let i = 0; i < difficultWords.length; i +=1 ) {
            const img = `img/${difficultWords[i][2]}/${difficultWords[i][0]}.png`;
            const audio = `audio/${difficultWords[i][0]}.mp3`
            const categories = new CardsCategories(difficultWords[i][0], img, undefined, true, difficultWords[i][1], 
                audio, true, false);
            categories.createCategories();
        }
    })
                
    document.querySelector('.buttons.reset').addEventListener('click', () => {
        localStorageReset();
        document.querySelector('main').innerHTML = '';
        stats.createSection();
    })
    localStorage.setItem('section', 'stats');
}

if(localStorage.getItem(EXAMPLE_WORD) === null) {
    localStorageReset();
}

function playCard() {
    document.querySelectorAll('.card-container').forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.detail === 1) {
            if (e.currentTarget.id === repeatWord && numAudio < words.length) {
                e.currentTarget.classList.add('chosen');
                musicPlay(CORRECT_SOUND);
                numAudio += 1;
                const obj = JSON.parse(localStorage.getItem(e.currentTarget.id));
                    obj.right += 1;
                localStorage.setItem(e.currentTarget.id, JSON.stringify(obj));
                turnOn();
                if(e.target.children.length!==0) {
                    e.target.children[0].classList.add('half_opacity');
                    e.target.children[0].style.pointerEvents = 'none';

                }else {
                    e.target.classList.add('half_opacity');
                    e.target.style.pointerEvents = 'none';
                }
                const like = document.createElement('div');
                    like.classList.add('like', 'correct');
                    document.querySelector('.likes_container').prepend(like);
            } else if (e.currentTarget.className ==='card-container chosen') {
                return 
            } else if (numAudio < words.length){
                musicPlay(ERROR_SOUND);
                const obj = JSON.parse(localStorage.getItem(repeatWord));
                    obj.wrong += 1;
                localStorage.setItem(repeatWord, JSON.stringify(obj));
                const dislike = document.createElement('div');
                    dislike.classList.add('like', 'error');
                    document.querySelector('.likes_container').prepend(dislike);
            }

            if (numAudio === words.length) {
                goUp();
                finishGame();
            }
        }
        }, true);
    });
}

    main.createNav();
    main.createTopics();
    chooseCards();
    localStorage.setItem('section', 'main');

document.querySelector('.checkbox-label').addEventListener('click', () => {
    document.querySelector('.train').classList.toggle('none');
    document.querySelector('.play').classList.toggle('none');
    if (document.querySelector('.train').className === 'train none') {
        play = true;
        train = false;
    } else {
        play = false;
        train = true;
        document.querySelector('.repeat').classList.add('hidden');
        document.querySelector('.start-button').classList.remove('visible');
        document.querySelector('.likes_container').innerHTML = '';
    }
    words = [];
    numAudio = 0;
    repeatWord = '';
    changeMode();
});
    
document.querySelectorAll('li').forEach((item) => {
    let section = '';
    item.addEventListener('click', ()=>{
        if (item.id === 'main') {
            document.querySelector('main').innerHTML = '';
            document.querySelector('.start-button').classList.remove('visible');
            main.createTopics();
            chooseCards();
            topic = '';
            localStorage.setItem('section', 'main');
        } else if (item.id === 'stats'){
            selectStats();
        } else {
            section = item.id;
            topic = section;
            document.querySelector('main').innerHTML = '';
                const category = new CategoryPage(section, train, play);
                category.createSection();
            localStorage.setItem('section', item.id);
        }
        hideAdditions();
    })
})

document.body.addEventListener('click', (e) => {
    if (document.body.className === 'hidden_scroll' && e.target.className !== 'burger') {
      if (e.target.className === 'menu_back open') {
        document.querySelector('.menu').classList.add('hidden');
        document.body.classList.remove('hidden_scroll');
        document.querySelector('.menu_back').classList.remove('open');
        document.querySelector('.burger-button').classList.remove('active');
      }
    }
});

document.querySelector('.start-button').addEventListener('click', () => {
    words = [];
    numAudio = 0;
    repeatWord = '';
    setTimeout(() => {
        document.querySelector('.start-button').classList.remove('visible');
    }, 300);
    document.querySelector('.repeat').classList.remove('hidden');

    const theme = data[ARRAY_OF_TOPICS].indexOf(topic);
    const objWord = data[theme+DIFFERENCE];

   for (let i = 0; i < objWord.length; i += 1) {
       words.push(objWord[i].audioSrc);
   }
  
   words.sort(() => Math.random() - 0.5);
   turnOn();
   playCard();
})

document.querySelector('.burger-button').addEventListener('click', () => {
    goUp();
    document.querySelector('.menu').classList.toggle('hidden');

    document.querySelectorAll('li').forEach((item) => {
        if (item.id === localStorage.getItem('section') && document.querySelector('.burger-button').classList.value === 'burger-button active') {
            item.classList.add('current');
        } else {
            item.classList.remove('current');
        }
    })

    setTimeout(() => {
        document.querySelector('.menu_back').classList.toggle('open');
    }, 200);

    if (document.querySelector('.burger-button').classList.value === 'burger-button active') {
        document.body.classList.add('hidden_scroll');
    } else {
        document.body.classList.remove('hidden_scroll');
    };
});

document.querySelector('.repeat').addEventListener('click', () => {
    if (numAudio < words.length) {
        musicPlay(words[numAudio])
    }
});

document.querySelectorAll('.card-image play half_opacity').forEach(item => {
    item.addEventListener('click',  () => { 
        return false; 
    });
});


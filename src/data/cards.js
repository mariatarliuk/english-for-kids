const cards = [ 
    ['Actions', 'Animal 1', 'Animal 2', 'Family', 'Food', 'Profession', 'Emotions', 'Home'],
    ['img/main/actions.png', 'img/main/animals1.png', 'img/main/animals2.png', 'img/main/family.png', 
    'img/main/food.png', 'img/main/profession.png', 'img/main/feelings.png', 'img/main/home.png'],
    ['antiquewhite','aquamarine', 'darkseagreen', 'bisque', 'violet', 'powderblue', 'mistyrose','paleturquoise'],
    [
      {
        word: 'talk',
        translation: 'разговаривать',
        image: 'img/actions/talk.png',
        audioSrc: 'audio/talk.mp3'
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/actions/dance.png',
        audioSrc: 'audio/dance.mp3'
      },
      {
        word: 'study',
        translation: 'учиться',
        image: 'img/actions/study.png',
        audioSrc: 'audio/study.mp3'
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/actions/draw.png',
        audioSrc: 'audio/draw.mp3'
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/actions/fish.png',
        audioSrc: 'audio/fish.mp3'
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/actions/fly.png',
        audioSrc: 'audio/fly.mp3'
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/actions/hug.png',
        audioSrc: 'audio/hug.mp3'
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/actions/jump.png',
        audioSrc: 'audio/jump.mp3'
      }
    ],
    [
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/animal1/dolphin.png',
        audioSrc: 'audio/dolphin.mp3'
      },
      {
        word: 'elephant',
        translation: 'слон',
        image: 'img/animal1/elephant.png',
        audioSrc: 'audio/elephant.mp3'
      },
      {
        word: 'giraffe',
        translation: 'жираф',
        image: 'img/animal1/giraffe.png',
        audioSrc: 'audio/giraffe.mp3'
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/animal1/horse.png',
        audioSrc: 'audio/horse.mp3'
      },
      {
        word: 'koala',
        translation: 'коала',
        image: 'img/animal1/koala.png',
        audioSrc: 'audio/koala.mp3'
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/animal1/lion.png',
        audioSrc: 'audio/lion.mp3'
      },
      {
        word: 'monkey',
        translation: 'обезьяна',
        image: 'img/animal1/monkey.png',
        audioSrc: 'audio/monkey.mp3'
      },
      {
        word: 'raccoon',
        translation: 'енот',
        image: 'img/animal1/raccoon.png',
        audioSrc: 'audio/raccoon.mp3'
      }
    ],
    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/animal2/cat.png',
        audioSrc: 'audio/cat.mp3'
      },
      {
        word: 'bear',
        translation: 'медведь',
        image: 'img/animal2/bear.png',
        audioSrc: 'audio/bear.mp3'
      },
      {
        word: 'crocodile',
        translation: 'крокодил',
        image: 'img/animal2/crocodile.png',
        audioSrc: 'audio/crocodile.mp3'
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/animal2/dog.png',
        audioSrc: 'audio/dog.mp3'
      },
      {
        word: 'flamingo',
        translation: 'фламинго',
        image: 'img/animal2/flamingo.png',
        audioSrc: 'audio/flamingo.mp3'
      },
      {
        word: 'fox',
        translation: 'лиса',
        image: 'img/animal2/fox.png',
        audioSrc: 'audio/fox.mp3'
      },
      {
        word: 'ox',
        translation: 'бык',
        image: 'img/animal2/ox.png',
        audioSrc: 'audio/ox.mp3'
      },
      {
        word: 'rhino',
        translation: 'носорог',
        image: 'img/animal2/rhino.png',
        audioSrc: 'audio/rhino.mp3'
      }
    ],
    [
      {
        word: 'brother',
        translation: 'брат',
        image: 'img/family/brother.png',
        audioSrc: 'audio/brother.mp3'
      },
      {
        word: 'children',
        translation: 'дети',
        image: 'img/family/children.png',
        audioSrc: 'audio/children.mp3'
      },
      {
        word: 'father',
        translation: 'папа',
        image: 'img/family/father.png',
        audioSrc: 'audio/father.mp3'
      },
      {
        word: 'grandfather',
        translation: 'дедушка',
        image: 'img/family/grandfather.png',
        audioSrc: 'audio/grandfather.mp3'
      },
      {
        word: 'grandmother',
        translation: 'бабушка',
        image: 'img/family/grandmother.png',
        audioSrc: 'audio/grandmother.mp3'
      },
      {
        word: 'mother',
        translation: 'мама',
        image: 'img/family/mother.png',
        audioSrc: 'audio/mother.mp3'
      },
      {
        word: 'parents',
        translation: 'родители',
        image: 'img/family/parents.png',
        audioSrc: 'audio/parents.mp3'
      },
      {
        word: 'sister',
        translation: 'сестра',
        image: 'img/family/sister.png',
        audioSrc: 'audio/sister.mp3'
      }
    ],
    [
      {
        word: 'burger',
        translation: 'бургер',
        image: 'img/food/burger.png',
        audioSrc: 'audio/burger.mp3'
      },
      {
        word: 'cake',
        translation: 'торт',
        image: 'img/food/cake.png',
        audioSrc: 'audio/cake.mp3'
      },
      {
        word: 'fries',
        translation: 'фри',
        image: 'img/food/fries.png',
        audioSrc: 'audio/fries.mp3'
      },
      {
        word: 'hotdog',
        translation: 'хот-дог',
        image: 'img/food/hotdog.png',
        audioSrc: 'audio/hotdog.mp3'
      },
      {
        word: 'omelette',
        translation: 'яичница',
        image: 'img/food/omelette.png',
        audioSrc: 'audio/omelette.mp3'
      },
      {
        word: 'pasta',
        translation: 'паста',
        image: 'img/food/pasta.png',
        audioSrc: 'audio/pasta.mp3'
      },
      {
        word: 'pizza',
        translation: 'пицца',
        image: 'img/food/pizza.png',
        audioSrc: 'audio/pizza.mp3'
      },
      {
        word: 'sandwich',
        translation: 'сэндвич',
        image: 'img/food/sandwich.png',
        audioSrc: 'audio/sandwich.mp3'
      }
    ],
    [
      {
        word: 'builder',
        translation: 'строитель',
        image: 'img/profession/builder.png',
        audioSrc: 'audio/builder.mp3'
      },
      {
        word: 'cook',
        translation: 'повар',
        image: 'img/profession/cook.png',
        audioSrc: 'audio/cook.mp3'
      },
      {
        word: 'policeman',
        translation: 'полицейский',
        image: 'img/profession/policeman.png',
        audioSrc: 'audio/policeman.mp3'
      },
      {
        word: 'doctor',
        translation: 'доктор',
        image: 'img/profession/doctor.png',
        audioSrc: 'audio/doctor.mp3'
      },
      {
        word: 'secretary',
        translation: 'секретарь',
        image: 'img/profession/secretary.png',
        audioSrc: 'audio/secretary.mp3'
      },
      {
        word: 'seller',
        translation: 'продавец',
        image: 'img/profession/seller.png',
        audioSrc: 'audio/seller.mp3'
      },
      {
        word: 'teacher',
        translation: 'учитель',
        image: 'img/profession/teacher.png',
        audioSrc: 'audio/teacher.mp3'
      },
      {
        word: 'vet',
        translation: 'ветеринар',
        image: 'img/profession/vet.png',
        audioSrc: 'audio/vet.mp3'
      }
    ],
    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/emotions/sad.png',
        audioSrc: 'audio/sad.mp3'
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/emotions/angry.png',
        audioSrc: 'audio/angry.mp3'
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/emotions/happy.png',
        audioSrc: 'audio/happy.mp3'
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/emotions/tired.png',
        audioSrc: 'audio/tired.mp3'
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/emotions/surprised.png',
        audioSrc: 'audio/surprised.mp3'
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/emotions/scared.png',
        audioSrc: 'audio/scared.mp3'
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/emotions/smile.png',
        audioSrc: 'audio/smile.mp3'
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/emotions/laugh.png',
        audioSrc: 'audio/laugh.mp3'
      }
    ],
    [
      {
        word: 'balcony',
        translation: 'балкон',
        image: 'img/home/balcony.png',
        audioSrc: 'audio/balcony.mp3'
      },
      {
        word: 'bathroom',
        translation: 'ванная',
        image: 'img/home/bathroom.png',
        audioSrc: 'audio/bathroom.mp3'
      },
      {
        word: 'bedroom',
        translation: 'спальня',
        image: 'img/home/bedroom.png',
        audioSrc: 'audio/bedroom.mp3'
      },
      {
        word: 'garage',
        translation: 'гараж',
        image: 'img/home/garage.png',
        audioSrc: 'audio/garage.mp3'
      },
      {
        word: 'house',
        translation: 'дом',
        image: 'img/home/house.png',
        audioSrc: 'audio/house.mp3'
      },
      {
        word: 'kitchen',
        translation: 'кухня',
        image: 'img/home/kitchen.png',
        audioSrc: 'audio/kitchen.mp3'
      },
      {
        word: 'living room',
        translation: 'гостиная',
        image: 'img/home/living-room.png',
        audioSrc: 'audio/living room.mp3'
      },
      {
        word: 'alcove',
        translation: 'беседка',
        image: 'img/home/veranda.png',
        audioSrc: 'audio/alcove.mp3'
      }
    ]
  ]
  
  
  
  
  
  export default cards;
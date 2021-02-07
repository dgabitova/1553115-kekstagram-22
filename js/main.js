// Get random number
const getRandomNum = function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum > minNumber ? randomNum : minNumber;
};
getRandomNum(0, 500);

// Get max string value
const checkLengthString = (string, max) => {
  return string.length <= max;
}
checkLengthString ('comment', 140);

//Функции для создания массива из 25 сгенерированных объектов
const LIKES = getRandomNum(15, 200);


const NAMES = [
  'Дмитрий',
  'Анна',
  'Татьяна',
  'Игорь',
  'Антон',
  'Альберт',
  'Инна',
  'Луиза',
  'Лена',
  'Максим',
  'Артем',
  'Алина',
  'Анатолий',
  'Марат',
  'Кира',
  'Диана',
  'Андрей',
  'Света',
  'Марина',
  'Кристина',
  'Клим',
  'Лира',
  'Олег',
  'Константин',
  'Денис',
];


const DESCRIPTION = [
  'Я этого хочу. Значит, это будет.',
  'Логика может привести вас от пункта А к пункту Б, а воображение – куда угодно.',
  'Быстрее всего учишься в трех случаях – до 7 лет, на тренингах, и когда жизнь загнала тебя в угол.',
  'Есть только один способ проделать большую работу – полюбить ее!',
  'Кораблю безопасней в порту, но он не для этого строился.',
  'Лучше зажечь одну свечу, чем проклинать темноту. ',
  'Жизнь – это большой холст и вы должны бросить на него всю краску какую только можете.',
  'Путь в тысячу ли начинается с одного единственного маленького шага.',
  'Никогда не недооценивайте себя. Все то, что делают другие, можете делать и вы.',
  'Или вы управляете днем или день управляет вами.',
  'В вашем подсознании скрыта сила, способная перевернуть мир.',
  'Мы являемся тем, что постоянно делаем. Следовательно, совершенство – не действие, а привычка.',
  'Если вы хотите иметь успех, вы должны выглядеть так, как будто вы его имеете.',
  'Наши достижения всегда соответствуют нашим амбициям.',
  'Улыбнитесь, потому что жизнь – прекрасная вещь и есть много причин для улыбок.',
  'Стремитесь быть не просто успешным человеком, а ценным.',
  'Поверьте, что сможете, и пол пути уже пройдено.',
  '80% успеха – это появиться в нужном месте в нужное время.',
  'Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем.',
  'Ваше время ограничено, не тратьте его, живя чужой жизнью.',
  'Не будь другим, если можешь быть самим собой.',
  'То, что не будет записано, никогда не будет исполнено.',
  'Не ошибается тот, кто ничего не делает! Не бойтесь ошибаться – бойтесь повторять ошибки!',
  'Делай, что можешь, с тем, что у тебя есть, и там, где ты находишься. ',
  'Не могу придумать умную цитату.',
];


const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const totalUsers = 25;


const getAvatar = () => {
  return `img/avatar-${getRandomNum(1, 6)}.svg`
};


const getRandomArrayElement = (element) => {
  return element [getRandomNum(0, element.length - 1)];
};


const getNewComment = () => {
  return {
    id: Number(getRandomNum(0, 2000) + getRandomNum(100, 500)),
    avatar: getAvatar(),
    message: getRandomArrayElement(MESSAGE, 0, 6),
    name: getRandomArrayElement(NAMES, 0, 25),
  }
};

const getRandomCommentsArray = () => {
  const commentsArray = [];
  const numberOfComments = getRandomNum(0, 5);
  for (let i = 0; i < numberOfComments; i++) {
    commentsArray.push(getNewComment());
  }
  return commentsArray;
};

//Закомментила фрагмент, через который почему-то не получается вынести функцию:

//const getNewPhotoObject = () => {
//return {
//      id: i + 1,
//      url: `photos/${i + 1}.jpg`,
//      description: getRandomArrayElement(DESCRIPTION),
//      likes: getRandomNum(LIKES),
//      comments: getRandomCommentsArray(),
//    }
//};

//const getRandomUsersArray = () => {
//  const usersArray = [];
//  for (let i = 0; i < totalUsers; i++) {
//   usersArray.push(getNewPhotoObject);
//    }
// return usersArray;
//};


const getRandomUsersArray = () => {
  const usersArray = [];
  for (let i = 0; i < totalUsers; i++) {
    const newPhotoObject = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomNum(LIKES),
      comments: getRandomCommentsArray(),
    };
    usersArray.push(newPhotoObject);
  }
  return usersArray;
};

getRandomUsersArray();

import {getRandomUsersArray} from './data.js';

const photosList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = getRandomUsersArray();

const pictureFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = comments.length;
  pictureElement.querySelector('.picture__comments').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

photosList.appendChild(pictureFragment);


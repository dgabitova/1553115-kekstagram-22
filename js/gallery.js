import {getRandomUsersArray} from './data.js';
import {createModalPicture} from './full-screen-photo.js'

const photosList = document.querySelector('.pictures');
const similarPhotos = getRandomUsersArray();
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getPhotoTemplate = (object) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = object.url;
  pictureElement.querySelector('.picture__likes').textContent = object.comments.length;
  pictureElement.querySelector('.picture__comments').textContent = object.likes;
  pictureElement.dataset.photoId = object.id;

  pictureElement.addEventListener('click', (e) => {
    const target = e.target;
    if (target.dataset.photoId !== undefined) {
      return target.dataset.photoId;
    }
    createModalPicture(object);
  });
  return pictureElement;
}


const drawPhotos = (similarPhotos) => {
  const pictureFragment = document.createDocumentFragment();
  similarPhotos.forEach((item) => {
    pictureFragment.appendChild(getPhotoTemplate(item));
  });
  return pictureFragment;
}

photosList.appendChild(drawPhotos(similarPhotos));

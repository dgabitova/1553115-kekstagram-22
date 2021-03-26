import {createModalPicture} from './full-screen-photo.js'

const photosList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getPhotoTemplate = (object) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = object.url;
  pictureElement.querySelector('.picture__likes').textContent = object.likes;
  pictureElement.querySelector('.picture__comments').textContent = object.comments.length;
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

export const drawPhotos = (similarPhotos) => {
  cleanData ();
  const pictureFragment = document.createDocumentFragment();
  similarPhotos.forEach((item) => {
    pictureFragment.appendChild(getPhotoTemplate(item));
  });
  photosList.appendChild(pictureFragment);
}

export const cleanData = () => {
  const smallPhotos = document.querySelectorAll('.picture');
  smallPhotos.forEach((photo) => photo.remove())
}


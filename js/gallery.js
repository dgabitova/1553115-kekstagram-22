const photosList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getPhotoTemplate = (object) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = object.url;
  pictureElement.querySelector('.picture__likes').textContent = object.comments.length;
  pictureElement.querySelector('.picture__comments').textContent = object.likes;

  return pictureElement;
}

const drawPhotos = (similarPhotos) => {
  const pictureFragment = document.createDocumentFragment();
  similarPhotos.forEach((item) => {
    pictureFragment.appendChild(getPhotoTemplate(item));
  });
  photosList.appendChild(pictureFragment);
}

export {drawPhotos};

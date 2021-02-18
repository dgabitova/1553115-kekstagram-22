import {isEscEvent} from './utils.js';

const modalPicture = document.querySelector('.big-picture');
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
const modalPictureLikes = modalPicture.querySelector('.likes-count');
const modalPictureDescription = modalPicture.querySelector('.social__caption');
const modalPictureCommentsCount = modalPicture.querySelector('.comments-count');
const modalPictureCommentsList = modalPicture.querySelector('.social__comments');
const modalButtonCancel = modalPicture.querySelector('.big-picture__cancel');

const onModalPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    closeModal();
  }
}

const openModal = () => {
  modalPicture.classList.remove('hidden');
  document.addEventListener('keydown', onModalPictureEscKeydown);
  modalPicture.querySelector('.social__comment-count').classList.add('hidden');
  modalPicture.querySelector('.social__comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
}

const closeModal = () => {
  modalPicture.classList.add('hidden');
  document.removeEventListener('keydown', onModalPictureEscKeydown);
  modalPicture.querySelector('.social__comment-count').classList.remove('hidden');
  modalPicture.querySelector('.social__comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

const createModalPicture = (object) => {
  openModal();
  modalPictureImg.src = object.url;
  modalPictureImg.alt = '';
  modalPictureLikes.textContent = object.likes;
  modalPictureCommentsCount.textContent = object.comments.length;
  modalPictureDescription.textContent = object.description;
  modalPictureCommentsList.innerHTML = '';

  if (object.comments.length > 0) {
    object.comments.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('social__comment');
      item.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35">' +
        '<p class="social__text"></p>';
      item.querySelector('.social__picture').src = element.avatar;
      item.querySelector('.social__picture').alt = element.name;
      item.querySelector('.social__text').textContent = element.message;
      modalPictureCommentsList.appendChild(item);
    });
  }
  modalButtonCancel.addEventListener('click', () => {
    closeModal();
  });

}

export {createModalPicture};

import {isEscEvent} from './util.js';

const modalPicture = document.querySelector('.big-picture');
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
const modalPictureLikes = modalPicture.querySelector('.likes-count');
const modalPictureDescription = modalPicture.querySelector('.social__caption');
const modalPictureCommentsCount = modalPicture.querySelector('.comments-count');
const modalPictureCommentsList = modalPicture.querySelector('.social__comments');
const modalButtonCancel = modalPicture.querySelector('.big-picture__cancel');
const commentsLoader = modalPicture.querySelector('.comments-loader');

const SHOW_COMMENTS = 5;

const onModalPictureEscKeydown = (evt) => {
  isEscEvent(evt, closeModal)
}

const openModal = () => {
  modalPicture.classList.remove('hidden');
  document.addEventListener('keydown', onModalPictureEscKeydown);
  modalPicture.querySelector('.social__comment-count').classList.add('hidden');
  modalPicture.querySelector('.social__comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  commentsLoader.classList.remove('hidden');
}

const closeModal = () => {
  modalPicture.classList.add('hidden');
  document.removeEventListener('keydown', onModalPictureEscKeydown);
  modalPicture.querySelector('.social__comment-count').classList.remove('hidden');
  modalPicture.querySelector('.social__comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

export const createModalPicture = (object) => {
  openModal();
  modalPictureImg.src = object.url;
  modalPictureImg.alt = '';
  modalPictureLikes.textContent = object.likes;
  modalPictureCommentsCount.textContent = object.comments.length;
  modalPictureDescription.textContent = object.description;
  modalPictureCommentsList.innerHTML = '';

  const createSocialComment = (commentObj) => {
    return `
      <li class="social__comment">
        <img
          class="social__picture"
          src="${commentObj.avatar}"
          alt="${commentObj.name}"
          width="35" height="35">
        <p class="social__text">${commentObj.message}</p>
      </li>`;
  }

  const comments = object.comments.map((it) => createSocialComment(it));
  modalPictureCommentsList.innerHTML = comments.join('');

  modalButtonCancel.addEventListener('click', () => {
    closeModal();
  });

  const allComments = document.querySelectorAll('.social__comment');
  allComments.forEach((comment) => {
    comment.classList.add('hidden');
  });

  showComments(SHOW_COMMENTS);
};

const showComments = (n) => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  if (hiddenComments.length <= SHOW_COMMENTS) {
    commentsLoader.classList.add('hidden');
  }
  [...hiddenComments].slice(0, n).forEach((comment) => comment.classList.remove('hidden'));
};

commentsLoader.addEventListener('click', () => {
  showComments(SHOW_COMMENTS);
});




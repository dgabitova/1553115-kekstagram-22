import {getPhotoTemplate} from './gallery.js';
import {createMessageUpload, createMessageError} from './user-modal.js';

fetch ('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((object) => getPhotoTemplate(object))
  .catch(() => createMessageError());

const createFetch = (onSuccess) => {
  const pictureUploadForm = document.querySelector('.img-upload__form');
  pictureUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fetch (
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: new FormData(),
      }).then((response) => {
      if (response.ok) {
        onSuccess();
        createMessageUpload('success');
      } else {
        createMessageUpload('error');
      }
    }).catch(() => createMessageUpload('error'));
  });
};

export {createFetch};

import { drawPhotos } from './gallery.js';

const filter = document.querySelector('.img-filters');

export const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      drawPhotos(photos);
      filter.classList.remove('img-filters--inactive');
    })
    .catch(() => {
      onFail();
    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

const SERVER_URL_DOWNLOAD_DATA = 'https://22.javascript.pages.academy/kekstagram/data';
const SERVER_URL_UPLOAD_DATA = 'https://22.javascript.pages.academy/kekstagram';

export const getData = (onSuccess, onFail) => {
  fetch(SERVER_URL_DOWNLOAD_DATA)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail();
    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_URL_UPLOAD_DATA,
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


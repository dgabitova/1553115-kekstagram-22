import {sendData} from './api.js';
import {createMessageUpload, createMessageError} from './api-message.js';

const form = document.querySelector('.img-upload__form');
const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  sendData(createMessageUpload, createMessageError, formData);
};
form.addEventListener('submit', onFormSubmit);


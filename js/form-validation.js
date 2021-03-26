import {sendData} from './api.js';
import {createMessageUpload, createMessageError} from './api-message.js';

const hashtagInput = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const regular = /^#[a-zа-яё0-9]{1,19}/i;
const DESCRIPTION_MAX_LENGTH = 140;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_MAX_COUNT = 5;

export const validateHashtag = () => {
  let hashtagArray = [];
  hashtagArray = hashtagInput.value.toLowerCase().split(' ');
  hashtagArray.forEach((element, index, array)=>{
    if (element.length >= HASHTAG_MAX_LENGTH) {
      hashtagInput.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (array.indexOf(element) !== array.lastIndexOf(element)){
      hashtagInput.setCustomValidity(`Хэш-теги ${array[array.indexOf(element)]} и ${array[array.lastIndexOf(element)]} не могут быть одинаковыми`);
    } else if (array.length > HASHTAG_MAX_COUNT ) {
      hashtagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    } else if (!regular.exec(element) && element !== '') {
      hashtagInput.setCustomValidity('Хэш-тег должен начинаться с # и содержать только буквы и числа, а также не должен состоять только из одной решетки');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });
  hashtagInput.reportValidity();
}

export const validateDescription = () => {
  if (description.value > DESCRIPTION_MAX_LENGTH) {
    description.setCustomValidity(`Длина комментария не может составлять больше ${DESCRIPTION_MAX_LENGTH} символов`);
  } else {
    description.setCustomValidity('');
  }
  description.reportValidity();
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  sendData(createMessageUpload, createMessageError, formData);
};
form.addEventListener('submit', onFormSubmit);

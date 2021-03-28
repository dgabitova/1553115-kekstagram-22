import {sendData} from './api.js';
import {createMessageUpload, createMessageError} from './api-message.js';
import {cleanPhotoForm} from './photo-redactor.js';

const description = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const DESCRIPTION_MAX_LENGTH = 140;
const hashtagsInput = document.querySelector('.text__hashtags');

const InvalidMessage = {
  HASHTAG_INVALID: `
  Хэш-тег начинается с символа # (решётка);
  строка после решётки должна состоять из букв и чисел;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега 20 символов, включая решётку;
  хэш-теги разделяются пробелами.`,
  HASHTAG_DUPLICATE: 'Хэш-теги нечувствительны к регистру, один и тот же хэш-тег не может быть использован дважды.',
  TOO_MANY_HASHTAGS: 'Нельзя указать больше пяти хэш-тегов.',
};
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_VALIDITY_REGEX = RegExp('^#[a-zA-Z0-9а-яА-ЯёЁ]{1,19}$');

const onHashtagInputChange = (evt) => {
  const hashtagsArray = evt.target.value.toLowerCase().split(' ');
  const isInvalidHashtagInArray = !hashtagsArray.every((item) => ((item) === '' || HASHTAG_VALIDITY_REGEX.test(item)));
  const isDuplicateHashtagInArray = !hashtagsArray.every((item, index, array) => array.indexOf(item) === index);

  if (hashtagsArray.length > HASHTAG_MAX_COUNT) {
    hashtagsInput.setCustomValidity(InvalidMessage.TOO_MANY_HASHTAGS);
  } else if (isInvalidHashtagInArray) {
    hashtagsInput.setCustomValidity(InvalidMessage.HASHTAG_INVALID);
  } else if (isDuplicateHashtagInArray) {
    hashtagsInput.setCustomValidity(InvalidMessage.HASHTAG_DUPLICATE);
  } else {
    hashtagsInput.setCustomValidity('');
  }
};

hashtagsInput.addEventListener('input', onHashtagInputChange);

const onDescriptionValidateChange = () => {
  if (description.value > DESCRIPTION_MAX_LENGTH) {
    description.setCustomValidity(`Длина комментария не может составлять больше ${DESCRIPTION_MAX_LENGTH} символов`);
  } else {
    description.setCustomValidity('');
  }
  description.reportValidity();
}

description.addEventListener('input', onDescriptionValidateChange);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  sendData(createMessageUpload, createMessageError, formData);
  cleanPhotoForm();
};
form.addEventListener('submit', onFormSubmit);

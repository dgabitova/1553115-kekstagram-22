import {isEscEvent} from './util.js';
import {getSliderOn, getSliderOff, resetSlider} from './photo-effects.js';
import {onScaleControlSmaller, onScaleControlBigger} from './photo-resize.js';
import  {validateHashtag, validateDescription} from './form-validation.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const uploadImage = pictureUploadForm.querySelector('.img-upload__input');
const modalPictureRedactor = pictureUploadForm.querySelector('.img-upload__overlay');
const modalCloseButtonRedactor = pictureUploadForm.querySelector('.img-upload__cancel');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');
const hashtagInput = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const onModalRedactorEscKeydown = (evt) => {
  isEscEvent(evt, onModalRedactorClose)
}

export const onModalRedactorOpen = () => {
  resetSlider();
  modalPictureRedactor.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
  scaleControlBigger.addEventListener('click', onScaleControlBigger);
  hashtagInput.addEventListener('input',validateHashtag);
  description.addEventListener('input', validateDescription);
  getSliderOn();
}

export const onModalRedactorClose = () => {
  modalPictureRedactor.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
  hashtagInput.removeEventListener('input',validateHashtag);
  description.removeEventListener('input', validateDescription);
  getSliderOff();
  uploadImage.value = '';
}

uploadImage.addEventListener('change', (onModalRedactorOpen));
modalCloseButtonRedactor.addEventListener('click', (onModalRedactorClose));


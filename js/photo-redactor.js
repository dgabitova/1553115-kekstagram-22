import {isEscEvent} from './util.js';
import {getSliderOn, getSliderOff, resetSlider} from './photo-effects.js';
import {onScaleControlSmaller, onScaleControlBigger} from './photo-resize.js';
import {resetPhotoResize} from './photo-resize.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const uploadImage = pictureUploadForm.querySelector('.img-upload__input');
const modalPictureRedactor = pictureUploadForm.querySelector('.img-upload__overlay');
const modalCloseButtonRedactor = pictureUploadForm.querySelector('.img-upload__cancel');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');
const hashtagInput = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const effectDischarge = document.querySelector('#effect-none');
const uploadPhotoPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const fileUpload = document.querySelector('#upload-file');
const imageRedactor = document.querySelector('.img-upload__overlay');

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
  document.querySelector('.img-upload__overlay').classList.remove('visually-hidden');
  getSliderOn();
}

export const onModalRedactorClose = () => {
  modalPictureRedactor.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
  cleanPhotoForm();
  uploadImage.value = '';
}

export const cleanPhotoForm = () => {
  effectDischarge.checked = true;
  uploadPhotoPreview.style.filter = 'none';
  effectLevel.classList.add('visually-hidden');
  resetPhotoResize();
  fileUpload.value = '';
  description.value = '';
  hashtagInput.value = '';
  imageRedactor.classList.add('visually-hidden');
  getSliderOff();
}

uploadImage.addEventListener('change', (onModalRedactorOpen));
modalCloseButtonRedactor.addEventListener('click', (onModalRedactorClose));

hashtagInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onModalRedactorEscKeydown)
});

hashtagInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onModalRedactorEscKeydown)
});

description.addEventListener('focus', () => {
  document.removeEventListener('keydown', onModalRedactorEscKeydown)
});

description.addEventListener('blur', () => {
  document.addEventListener('keydown', onModalRedactorEscKeydown)
});

import {isEscEvent} from './util.js';
import {getSliderOn, getSliderOff, resetSlider} from './photo-effects.js';
import {onScaleControlSmaller, onScaleControlBigger} from './photo-resize.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const uploadImage = pictureUploadForm.querySelector('.img-upload__input');
const modalPictureRedactor = pictureUploadForm.querySelector('.img-upload__overlay');
const modalCloseButtonRedactor = pictureUploadForm.querySelector('.img-upload__cancel');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');


const onModalRedactorEscKeydown = (evt) => {
  isEscEvent(evt, onModalRedactorClose)
}

const onModalRedactorOpen = () => {
  resetSlider();
  modalPictureRedactor.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
  scaleControlBigger.addEventListener('click', onScaleControlBigger);
  getSliderOn();
}

const onModalRedactorClose = () => {
  modalPictureRedactor.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
  getSliderOff();
  uploadImage.value = '';
}

uploadImage.addEventListener('change', (onModalRedactorOpen));
modalCloseButtonRedactor.addEventListener('click', (onModalRedactorClose));

export {onModalRedactorOpen, onModalRedactorClose};

import {isEscEvent} from './utils.js';
import {getSliderOn, getSliderOff} from './photo-effects.js'

const pictureUploadForm = document.querySelector('.img-upload__form');
const uploadImage = pictureUploadForm.querySelector('.img-upload__input');
const modalPictureRedactor = pictureUploadForm.querySelector('.img-upload__overlay');
const modalCloseButtonRedactor = pictureUploadForm.querySelector('.img-upload__cancel');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = pictureUploadForm.querySelector('.scale__control--value');
const uploadPhotoPreview = pictureUploadForm.querySelector('.img-upload__preview');
let scaleControlValueInt = parseInt(scaleControlInput.value);

const MIN_VALUE_SCALE_CONTROL = 25;
const MAX_VALUE_SCALE_CONTROL = 100;

const onModalRedactorEscKeydown = (evt) => {
  isEscEvent(evt, modalRedactorClose)
}

const modalRedactorOpen = () => {
  modalPictureRedactor.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
  scaleControlBigger.addEventListener('click', onScaleControlBigger);
  getSliderOn();
}

const modalRedactorClose = () => {
  modalPictureRedactor.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalRedactorEscKeydown);
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
  getSliderOff();
  uploadImage.value = '';
}

const onScaleControlSmaller = () => {
  if (scaleControlValueInt !== MIN_VALUE_SCALE_CONTROL) {
    scaleControlBigger.disabled = false;
    scaleControlValueInt -= 25;
    scaleControlInput.value = `${scaleControlValueInt}%`;
    uploadPhotoPreview.style.transform = `scale(${scaleControlValueInt / 100})`;
  } else {
    scaleControlSmaller.disabled = true;
  }
}

const onScaleControlBigger = () => {
  if (scaleControlValueInt !== MAX_VALUE_SCALE_CONTROL) {
    scaleControlSmaller.disabled = false;
    scaleControlValueInt += 25;
    scaleControlInput.value = `${scaleControlValueInt}%`;
    uploadPhotoPreview.style.transform = `scale(${scaleControlValueInt / 100})`;
  } else {
    scaleControlBigger.disabled = true;
  }
}
uploadImage.addEventListener('change', () => {
  modalRedactorOpen();
});
modalCloseButtonRedactor.addEventListener('click', () =>{
  modalRedactorClose();
});


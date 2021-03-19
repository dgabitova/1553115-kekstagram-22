import './gallery.js';
import './full-screen-photo.js'
import './photo-redactor.js';
import {getData} from './api.js';
import {createMessageError} from './api-message.js';
import {drawPhotos} from './gallery.js';
import './form-validation.js';
import {initFilters} from './filters.js';

const onLoad = (photosData) => {
  drawPhotos (photosData);
  initFilters (photosData);
}

const onError = () => {
  createMessageError();
}

getData(onLoad, onError);




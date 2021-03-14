import './gallery.js';
import './full-screen-photo.js'
import './photo-redactor.js';
import {getData} from './api.js';
import './api-message.js';
import {drawPhotos} from './gallery.js';
import './form-validation.js';
import './filters.js';

getData(drawPhotos);




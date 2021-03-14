import './gallery.js';
import './full-screen-photo.js'
import './photo-redactor.js';
import {getData} from './api.js';
import './api-message.js';
import {drawPhotos} from './gallery.js';
import './form-validation.js';
import {setRandomPhotos, setDiscussedPhotos, setDefaultPhotos} from './filters.js';

//getData(drawPhotos);
const RERENDER_DELAY = 500;

getData((posts) => {
  drawPhotos(posts);
  setDefaultPhotos(_.debounce(
    () => drawPhotos(posts),
    RERENDER_DELAY));
  setDiscussedPhotos(_.debounce(
    () => drawPhotos(posts),
    RERENDER_DELAY));
  setRandomPhotos(_.debounce(
    () => drawPhotos(posts),
    RERENDER_DELAY));
});




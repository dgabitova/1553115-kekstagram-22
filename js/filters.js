/* eslint-disable no-undef */
import {drawPhotos} from './gallery.js';
import {getData} from './api.js';

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const filterButton = document.querySelectorAll('.img-filters__button');

const RERENDER_DELAY = 500;

const handleClick = (evt) => {
  filterButton.forEach(filterButton => {
    filterButton.classList.remove('img-filters__button--active')
  });
  evt.target.classList.add('img-filters__button--active');
}

filterButton.forEach(filterButton => {
  filterButton.addEventListener('click', handleClick);
});

const cleanData = () => {
  const smallPhotos = document.querySelectorAll('.picture');
  for(let i=0; i < smallPhotos.length; i++){
    smallPhotos[i].remove();
  }
};

filterDefaultButton.addEventListener('click', () => {
  cleanData();
  getData();
});

const getRandomPhotos = (pictures) => {
  return pictures.sort(() => Math.random() - 0.5);
}

filterRandomButton.addEventListener('click', _.debounce(() => {
  cleanData();
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      drawPhotos(getRandomPhotos(photos)
        .slice(0, 10));
    });
},
RERENDER_DELAY));

const sortComment = (pictureA, pictureB) => {
  const commentA = pictureA.comments.length;
  const commentB = pictureB.comments.length;
  return commentB - commentA;
}

filterDiscussedButton.addEventListener('click', _.debounce(() => {
  cleanData();
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      drawPhotos(photos
        .slice()
        .sort(sortComment));
    });
},
RERENDER_DELAY));

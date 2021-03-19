/* eslint-disable no-undef */
import {drawPhotos} from './gallery.js';
//import {getData} from './api.js';

// const filterDefaultButton = document.querySelector('#filter-default');
// const filterRandomButton = document.querySelector('#filter-random');
// const filterDiscussedButton = document.querySelector('#filter-discussed');
// const filterButtons = document.querySelectorAll('.img-filters__button');
const filtersForm = document.querySelector('.img-filters__form');
const filter = document.querySelector('.img-filters');

// const RERENDER_DELAY = 500;


const defaultFilter = (photosData) => {
  return photosData;
};

const randomFilter = (pictures) => {
  const picturesCopy = pictures.slice(0);
  const getRandomPhotos = (picturesCopy) => {
    return picturesCopy.sort(() => Math.random() - 0.5);
  }
  return getRandomPhotos(picturesCopy);
}

const discussedFilter = () => {


};


// filterDefaultButton.addEventListener('click', () => {
//   cleanData();
//   getData();
// });
// filterRandomButton.addEventListener('click', _.debounce(() => {
//   cleanData();
//   fetch('https://22.javascript.pages.academy/kekstagram/data')
//     .then((response) => response.json())
//     .then((photos) => {
//       drawPhotos(getRandomPhotos(photos)
//         .slice(0, 10));
//     });
// },
// RERENDER_DELAY));

// const sortComment = (pictureA, pictureB) => {
//   const commentA = pictureA.comments.length;
//   const commentB = pictureB.comments.length;
//   return commentB - commentA;
// }

// filterDiscussedButton.addEventListener('click', _.debounce(() => {
//   cleanData();
//   fetch('https://22.javascript.pages.academy/kekstagram/data')
//     .then((response) => response.json())
//     .then((photos) => {
//       drawPhotos(photos
//         .slice()
//         .sort(sortComment));
//     });
// },
// RERENDER_DELAY));

const filtersType = {
  'filter-default': defaultFilter,
  'filter-random': randomFilter,
  'filter-discussed': discussedFilter,
};


export const initFilters = (data) => {
  filter.classList.remove('img-filters--inactive');
  const onFiltersFormClick = (evt) => {
    const filteredData = filtersType[evt.target.id](data);
    drawPhotos(filteredData);
  }
  filtersForm.addEventListener('click', onFiltersFormClick);
}

const onFilterButtonsMouseUp = (evt) => {
  const activeButton = document.querySelector('.img-filters__button--active');
  if (activeButton !== evt.target) {
    activeButton.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
}

filtersForm.addEventListener('click', onFilterButtonsMouseUp)





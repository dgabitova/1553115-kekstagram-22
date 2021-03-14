const RANDOM_FILTER_PHOTO_COUNT = 10;

export const filter = document.querySelector('.img-filters');
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

export const loadFilter = () => {
  filter.classList.remove('img-filters--inactive');
};

export const setDiscussedPhotos = (cb) => {
  filterDiscussedButton.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDefaultButton.classList.remove('img-filters__button--active');
    filterRandomButton.classList.remove('img-filters__button--active');
    cb();
  });
};

export const setDefaultPhotos = (cb) => {
  filterDefaultButton.addEventListener('click', (evt) => {
    evt.target.classList.add('img-filters__button--active');
    filterDiscussedButton.classList.remove('img-filters__button--active');
    filterRandomButton.classList.remove('img-filters__button--active');
    cb();
  });
};

export const setRandomPhotos = (cb) => {
  for (let i = 0; i < RANDOM_FILTER_PHOTO_COUNT; i++) {
    filterRandomButton.addEventListener('click', (evt) => {
      evt.target.classList.add('img-filters__button--active');
      filterDiscussedButton.classList.remove('img-filters__button--active');
      filterDefaultButton.classList.remove('img-filters__button--active');
      cb();
    });
  }
};


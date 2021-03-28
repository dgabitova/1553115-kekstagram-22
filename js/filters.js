/* global _:readonly */
import {drawPhotos} from './gallery.js';

const filtersForm = document.querySelector('.img-filters__form');

const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_QUANTITY = 10;

const getDefaultFilter = (photosData) => {
  return photosData.slice(0);
};

const getRandomFilter = (pictures) => {
  const picturesCopy = pictures.slice(0).sort(() => Math.random() - 0.5);
  return picturesCopy.slice(0, RANDOM_PHOTOS_QUANTITY);
}

const getDiscussedFilter = (data) => {
  return data.slice(0).sort((a, b) => b.comments.length - a.comments.length)
};

const filtersType = {
  'filter-default': getDefaultFilter,
  'filter-random': getRandomFilter,
  'filter-discussed': getDiscussedFilter,
};

export const initFilters = (data) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');

  const onFiltersFormClick = ({target}) => {
    let currentFilter = target.id;
    const filteredData = filtersType[currentFilter](data);
    drawPhotos(filteredData);
  }

  const debouncedClick = _.debounce(onFiltersFormClick, RERENDER_DELAY);
  filtersForm.addEventListener('click', debouncedClick);
}

const onFilterButtonsMouseUp = (evt) => {
  const activeButton = document.querySelector('.img-filters__button--active');
  if (activeButton !== evt.target) {
    activeButton.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
}

filtersForm.addEventListener('click', onFilterButtonsMouseUp)





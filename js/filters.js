import {drawPhotos} from './gallery.js';

const filtersForm = document.querySelector('.img-filters__form');

const defaultFilter = (photosData) => {
  return photosData.slice(0);
};

const randomFilter = (pictures) => {
  const picturesCopy = pictures.slice(0).sort(() => Math.random() - 0.5);
  return picturesCopy.slice(0, 10);
}

const discussedFilter = (data) => {
  return data.slice(0).sort((a, b) => b.comments.length - a.comments.length)
};

const filtersType = {
  'filter-default': defaultFilter,
  'filter-random': randomFilter,
  'filter-discussed': discussedFilter,
};

export const initFilters = (data) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');

  const onFiltersFormClick = ({target}) => {
    let currentFilter = target.id;
    const filteredData = filtersType[currentFilter](data);
    drawPhotos(filteredData);
  }

  // eslint-disable-next-line no-undef
  const debouncedClick = _.debounce(onFiltersFormClick, 500);
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





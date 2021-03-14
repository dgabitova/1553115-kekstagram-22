const pictureUploadForm = document.querySelector('.img-upload__form');
const sliderArea = pictureUploadForm.querySelector('.img-upload__effect-level');
const effectList = pictureUploadForm.querySelector('.effects__list');
const effectLevel = pictureUploadForm.querySelector('.effect-level__value');
const uploadPhotoPreview = pictureUploadForm.querySelector('.img-upload__preview');
let filter = '';
let unit = '';

/* global noUiSlider:readonly */

const slider = pictureUploadForm.querySelector('.effect-level__slider');

const initialConfig = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
};

export const getSliderOn = (uiSlider = slider, config = initialConfig) => {
  noUiSlider.create(uiSlider, config);
}

export const getSliderOff = (uiSlider = slider) => {
  slider.noUiSlider.destroy(uiSlider);
}

export const resetSlider = () => {
  sliderArea.classList.add('hidden');
  uploadPhotoPreview.style.filter = '';
  uploadPhotoPreview.style.transform = '';
}

const effectMap = {
  none: {
    className: 'effects__preview--none',
  },
  chrome: {
    className: 'effects__preview--chrome',
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.01,
    },
  },
  sepia: {
    className: 'effects__preview--sepia',
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.01,
    },
  },
  marvin: {
    className: 'effects__preview--marvin',
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    className: 'effects__preview--phobos',
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.03,
    },
  },
  heat: {
    className: 'effects__preview--heat',
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.03,
    },
  },
};

const onEffectListChange = (evt) => {
  window.console.log(evt.target);
  if (evt.target.id === 'effect-none') {
    resetSlider();
    return null
  }
  else {
    sliderArea.classList.remove('hidden');
  }
  filter = effectMap[evt.target.value].filter;
  unit = effectMap[evt.target.value].unit;
  slider.noUiSlider.updateOptions(effectMap[evt.target.value].options);
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevel.value = values[handle];
    uploadPhotoPreview.style.filter = `${filter}(${values[handle]}${unit})`;
  });
}


effectList.addEventListener('change', onEffectListChange);


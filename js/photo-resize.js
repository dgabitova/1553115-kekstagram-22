const pictureUploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = pictureUploadForm.querySelector('.scale__control--value');
const uploadPhotoPreview = pictureUploadForm.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const ORIGINAL_SCALE = 100;
let originalScale = ORIGINAL_SCALE;

export const onScaleControlSmaller = () => {
  if (originalScale > SCALE_MIN && originalScale <= SCALE_MAX) {
    originalScale -= SCALE_STEP;
    scaleControlInput.value = `${originalScale}%`;
    uploadPhotoPreview.style.transform = `scale(${originalScale/SCALE_MAX})`;
  }
};

export const onScaleControlBigger = () => {
  if (originalScale >= SCALE_MIN && originalScale < SCALE_MAX) {
    originalScale += SCALE_STEP;
    scaleControlInput.value = `${originalScale}%`;
    uploadPhotoPreview.style.transform = `scale(${originalScale/SCALE_MAX})`;
  }
}

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
scaleControlBigger.addEventListener('click', onScaleControlBigger);


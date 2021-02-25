const pictureUploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = pictureUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = pictureUploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = pictureUploadForm.querySelector('.scale__control--value');
const uploadPhotoPreview = pictureUploadForm.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
let originalScale = 100;

const onScaleControlSmaller = () => {
  if (originalScale > 25 && originalScale <= 100) {
    // eslint-disable-next-line no-const-assign
    originalScale -= SCALE_STEP;
    scaleControlInput.value = `${originalScale}%`;
    uploadPhotoPreview.style.transform = `scale(${originalScale/100})`;
  }
};

const onScaleControlBigger = () => {
  if (originalScale >= 25 && originalScale < 100) {
    // eslint-disable-next-line no-const-assign
    originalScale += SCALE_STEP;
    scaleControlInput.value = `${originalScale}%`;
    uploadPhotoPreview.style.transform = `scale(${originalScale/100})`;
  }
}

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
scaleControlBigger.addEventListener('click', onScaleControlBigger);

export {onScaleControlSmaller, onScaleControlBigger};

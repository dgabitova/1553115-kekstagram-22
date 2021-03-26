export const getRandomNum = function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum > minNumber ? randomNum : minNumber;
};

export const isEscEvent = (evt, callBack) => {
  if (evt.key === ('Escape' || 'Esc')) {
    callBack()
  }
}

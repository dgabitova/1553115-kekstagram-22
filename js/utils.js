// Get random number
const getRandomNum = function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum > minNumber ? randomNum : minNumber;
};
getRandomNum(0, 500);

// Get max string value
const checkLengthString = (string, max) => {
  return string.length <= max;
}
checkLengthString ('comment', 140);

//Get random array element
const getRandomArrayElement = (element) => {
  return element [getRandomNum(0, element.length - 1)];
};

const Key = {
  ESC: 'Escape' || 'Esc',
};

const isEscEvent = (evt, callback) => {
  if (evt.key === Key.ESC) {
    callback();
  }
};

export {getRandomNum, checkLengthString, getRandomArrayElement, isEscEvent};



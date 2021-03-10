// Get random number
// const getRandomNum = function(minNumber, maxNumber) {
//   const randomNum = Math.floor(Math.random() * maxNumber);
//   return randomNum > minNumber ? randomNum : minNumber;
// };

// Get max string value
// export const checkLengthString = (string, max) => {
//   return string.length <= max;
// }

//Get random array element
// const getRandomArrayElement = (element) => {
//   return element [getRandomNum(0, element.length - 1)];
// };

export const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
}



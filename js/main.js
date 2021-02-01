// Get random number
const getRandomNum =  function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum > minNumber ? randomNum : minNumber;
};
getRandomNum(0, 500);

// Get max string value
const checkLengthString = (string, max) => {
  return string.length <= max;
}
checkLengthString ('comment', 140);

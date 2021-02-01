// Get random number
const getRandomNum =  function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber);
  return randomNum > minNumber ? randomNum : minNumber;
};
getRandomNum(0, 500);

// Get max string value
const checkLengthString = (string, max = 140) => {
  string.length;
  if (string.length <= max) {
    return true;
  }
  return false;
}
checkLengthString('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

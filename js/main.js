// Get random number, https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get max string value, https://www.cyberforum.ru/javascript/thread1165903.html
const getLongestString = function (string max) {
  if (string.length > max)  {
    alert ('Длина строки не должна превышать ${max} символов');
  }
}

let comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
getRandomInt(0, 1);
getLongestStringString(comment, 140);



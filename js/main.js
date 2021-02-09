// Функция palindrome
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i += 1) {
    if (word[i] === word[word.length - 1 - i]) {
      return true;
    }
  }
  return false;
}

palindrome('радар');

// Функции min и max
function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

min(32, 64);

function max(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

max(11, 2);

// Через тернарный оператор

function minTernary(a, b) {
  // eslint-disable-next-line no-unused-expressions
  a > b ? console.log(b) : console.log(a);
}

minTernary(10, 20);

// Замена элементов массива
let result = 0;
function zamena(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    result = arr[i] % 10;
    if (result === 0) {
      console.log(arr[i].replace(0, 'zero'));
    }
  }
}

zamena([40, 11, 20, 23, 30, 56, 42, 63, 32, 100]);

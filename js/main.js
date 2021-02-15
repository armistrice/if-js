// Переменные
let user = 'John Doe';
console.log(user);
const student = 'Egor Leineveber';
console.log(student);
user = student;
console.log(user); // Egor Leineveber
// Примитивы
let test = 1;
test += 1;
test += '1';
console.log(test);// 21;
test -= 1;
console.log(test);// 20
console.log(!!test); // false
// Массивы
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i += 1) {
  result *= arr[i];
}
console.log(result);
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
let z = 0;
for (let i = 0; i < arr3.length; i += 1) {
  z = arr3[i] % 2;
  if (z === 0) {
    console.log(arr3[i]);
  }
}

// Функция palindrome
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i += 1) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('шалаш'));

// Функции min и max
function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

console.log(min(32, 64), '- меньшее из чисел');

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(max(11, 2), '- большее из чисел');

// Через тернарный оператор

function minTernary(a, b) {
  const result = a > b ? b : a;
  console.log(result, '- меньшее из чисел (тернарный оператор)');
}

minTernary(10, 20);

// Замена элементов массива

const array = [0, 10, 20, 34, 40, 55, 60, 70, 87, 90, 100];
function replaceZero() {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      array[i] = 'zero';
    } else if (array[i] % 100 === 0) {
      array[i] = `${array[i] / 100}zerozero`;
    } else if (array[i] % 10 === 0) {
      array[i] = `${array[i] / 10}zero`;
    }
  }
  return array;
}

console.log(replaceZero(array));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const para1 = document.getElementById('text1');
const para2 = document.getElementById('text2');
const para3 = document.getElementById('text3');

function colorChange(parameter) {
  let clicks = 0;
  return function () {
    clicks += 1;
    const paragraph = parameter;
    paragraph.style.color = colors[clicks - 1];
    if (clicks > colors.length - 1) {
      clicks = 0;
    }
  };
}

para1.addEventListener('click', colorChange(para1));
para2.addEventListener('click', colorChange(para2));
para3.addEventListener('click', colorChange(para3));

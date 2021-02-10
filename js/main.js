// Функция palindrome
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i += 1) {
    if (word[i] === word[word.length - 1 - i]) {
      return true;
    }
  }
  return false;
}

console.log(palindrome('радар'), '- слово является палиндромом');

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

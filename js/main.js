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
  console.log(result);
}
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

console.log('Lesson-2'); // LESSON - 2

let user = 'John Doe';
console.log(user);
const student = 'Egor Leineveber';
console.log(student);
user = student;
console.log(user); // Egor Leineveber

let test = 1;
test += 1;
test += '1';
console.log(test);// 21;
test -= 1;
console.log(test);// 20
console.log(!!test); // false

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

console.log('Lesson-3'); // LESSON - 3

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
  const resultTernary = a > b ? b : a;
  console.log(resultTernary, '- меньшее из чисел (тернарный оператор)');
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

console.log('Lesson-4'); // LESSON - 4

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

console.log('Lesson-5'); // LESSON - 5

function dateReplace(date) {
  const dateReplaced = date.slice(8) + date.slice(4, 8) + date.slice(0, 4);
  const dateWithDots = dateReplaced.replace(/-/g, '.');
  console.log(dateWithDots);
}

dateReplace('2020-11-26');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchData(searchWord) {
  const searchWordToLowerCase = searchWord.toLowerCase();
  for (let i = 0; i < data.length; i += 1) {
    const searchLineToLowerCase = data[i].country.toLowerCase()
      + data[i].city.toLowerCase() + data[i].hotel.toLowerCase();
    if (searchLineToLowerCase.includes(searchWordToLowerCase)) {
      console.log(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
    }
  }
}

searchData('germany');

console.log('Lesson-6'); // LESSON - 6

const wordPalindrome = 'шалаш';
const reverseWordPalindrome = wordPalindrome.split().reverse().join();
console.log(wordPalindrome === reverseWordPalindrome);

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function searchHotels(searchWord) {
  const searchWordToLowerCase = searchWord.toLowerCase();
  hotels.forEach((element) => {
    const searchLineToLowerCase = element.name.toLowerCase() + element.city.toLowerCase()
      + element.country.toLowerCase();
    if (searchLineToLowerCase.includes(searchWordToLowerCase)) {
      console.log(`${element.country}, ${element.city}, ${element.name}`);
    }
  });
}

searchHotels('south');

function searchCountry() {
  return hotels.reduce((accumulator, currentValue) => {
    const resultSearch = [];
    if (!accumulator[currentValue.country]) {
      resultSearch.push(currentValue.city);
      accumulator[currentValue.country] = resultSearch;
    } else if (!accumulator[currentValue.country].includes(currentValue.city)) {
      accumulator[currentValue.country].push(currentValue.city);
    }
    return accumulator;
  }, {});
}

console.log(searchCountry());

console.log('Lesson-7'); // LESSON - 7

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};

const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};

const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if ((firstObj !== Object(firstObj)) && (secondObj !== Object(secondObj))) {
    return firstObj === secondObj;
  }

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (let i = 0; i < firstObjKeys.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(secondObj, firstObjKeys[i])) {
      return false;
    }
  }

  for (const key in firstObj) {
    if (!deepEqual(firstObj[key], secondObj[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

console.clear();

console.log('Lesson-8'); // LESSON - 8

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get _fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  _course() {
    switch (this.admissionYear) {
      case 2017:
        return '4 курс';
      case 2018:
        return '3 курс';
      case 2019:
        return '2 курс';
      case 2020:
        return '1 курс';
      case 2021:
        return 'только поступил';
      default:
        return 'не обучается или уже закончил обучение';
    }
  }
}

class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    const resultStudents = [];

    this.students.forEach((elem) => {
      const studentFromArray = new Student(
        elem.firstName, elem.lastName, elem.admissionYear, elem.courseName,
      );

      resultStudents.push((`${studentFromArray.firstName} ${studentFromArray.lastName} - ${studentFromArray.courseName}, ${studentFromArray._course()}`));
    });

    return resultStudents.sort((a, b) => a - b);
  }
}

const showStudentsList = new Students(studentsData);
console.log(showStudentsList.getInfo());

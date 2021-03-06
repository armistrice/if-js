const dateReplace = require('./main');
const searchString = require('./main');

function sum(a) {
  return function (b) {
    return a + b;
  };
}

test('Sum 5 + 2', () => {
  expect(sum(5)(2)).toBe(7);
});

test('Sum string + 2', () => {
  expect(sum('string')(2)).toBe('string2');
});

test('Sum null + undefined', () => {
  expect(sum(null)(undefined)).toBe(NaN);
});
test('Date replacer', () => {
  expect(dateReplace('2019-07-25').toBe('25.07.2019'));
})
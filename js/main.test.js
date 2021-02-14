const sum = require('./main');

test('Sum 5 + 2', () => {
  expect(sum(5)(2)).toBe(7);
});

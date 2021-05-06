import { doubleNumbers } from './array-map';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const actual = doubleNumbers(input); // act
  expect(actual).toEqual([4, 10, 200]); // assert
});

export function stringyNumbers(arr) {
  return arr.map(item => {
    const stringy = item + '';
    return stringy;
  });
}

export function makeStrings(arr) {
  return arr.map(person => {
    return `${person.name} ${person.age < 18 ? 'is under age!!' : 'can go to The Matrix'}`;
  });
}

export function namesOnly(arr) {
  return arr.map(person => {
    return `${person.name}`;
  });
}
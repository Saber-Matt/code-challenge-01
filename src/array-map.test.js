import { doubleNumbers } from './array-map';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const actual = doubleNumbers(input); // act
  expect(actual).toEqual([4, 10, 200]); // assert
});
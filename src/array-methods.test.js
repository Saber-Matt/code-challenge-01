import { howMuchPencil, wordsToCharList } from './array-methods';

test('It should return a list of shortening words', () => {
  expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
  expect(howMuchPencil('Welcome').length).toStrictEqual(8);
  expect(howMuchPencil('')).toStrictEqual(['']);
  expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
});

test('wordsToCharList', () => {
  const expected = ['G', 'r', 'e', 'g', 'o', 'r'];
  const arr = 'Gregor';
  const actual = wordsToCharList(arr); console.log(actual, 'actual');
  expect(actual).toStrictEqual(expected);
});
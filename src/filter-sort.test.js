import { fiveAndGreaterOnly, fiveCharactersOrFewerOnly } from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('new array with 5 or fewer characters', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});
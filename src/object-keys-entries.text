import { capitalizeObjectKeys, sortedKeys, getFilteredKey, sortedArraysByValuesLength } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});

test('sortedKeys', () => {
  const sorted = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const newSorted = sortedKeys(sorted);
  expect(newSorted).toEqual(['age', 'name', 'isDog', 'friends']);
});

test('sorted arrays by values length', () => {
  const shera = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
  const newshera = sortedArraysByValuesLength(shera);
  expect(newshera).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
});

test(' get filtered key', () => {
  const shera = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const newshera = getFilteredKey(shera);
  expect(newshera).toEqual(['age']);
});
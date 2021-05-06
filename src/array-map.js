export function doubleNumbers(arr) {
  return arr.map(item => {
    const multiply = item * 2;
    return multiply;
  });
}

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

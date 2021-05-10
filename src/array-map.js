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

export function namesOnly(arr) {
  return arr.map(person => {
    return `${person.name}`;
  });
}

export function makeHeader(arr) {
  return arr.map(person => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
  });
}

export function capitalizeNames(arr) {
  return arr.map(name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
}
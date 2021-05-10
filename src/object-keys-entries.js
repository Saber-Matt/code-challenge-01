export function capitalizeObjectKeys(obj) {
  const capitalizedObject = Object.keys(obj);
  return capitalizedObject.map(capObject => capObject.toUpperCase());
}

export function sortedKeys(obj) {
  const sorted = Object.keys(obj);
  return sorted.sort((a, b) => a.length - b.length);
}

export function sortedArraysByValuesLength(obj) {
  const newObject = Object.entries(obj);
  return newObject.sort((a, b) => (a.length > b.length) ? 1 : -1);
}

export function getFilteredKey(obj) {
  const shera = Object.keys(obj);
  return shera.filter(a => a.length < 4);
}
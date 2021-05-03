export function capitalizeObjectKeys(obj) {
  const capitalizedObject = Object.keys(obj);
  return capitalizedObject.map(capObject => capObject.toUpperCase());
}

export function sortedKeys(obj) {
  const sorted = Object.keys(obj);
  return sorted.sort((a, b) => a.length - b.length);
}
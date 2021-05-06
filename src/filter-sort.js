export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 5);
};

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(arr.length < 6);
};

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(arr => arr.length < 5);
}

export function evensOnly(arr) {
  return arr.filter(number => number % 2 === 0);
}
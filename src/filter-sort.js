export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 5);
};

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(arr.length < 6);
};

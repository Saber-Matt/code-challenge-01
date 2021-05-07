export const howMuchPencil = (str) => {
  let arr = []; //console.log(str);
  for (let i = 0; i < str.length + 1; i++) {
    arr.push(str.slice(i));
  } //console.log(arr);
  return arr;
};


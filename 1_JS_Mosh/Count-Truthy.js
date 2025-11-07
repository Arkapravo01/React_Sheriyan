const arr = [1, 2, 0, "Arka", null, undefined];

const count = (arr) => {
  let t = 0;
  let f = 0;
  arr.map((elem) => {
    if (elem) t += 1;
    else f += 1;
  });
  return [t, f];
};

console.log(count(arr));

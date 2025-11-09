const num = [1, -1, 2, 3];

const list = num
  .filter((e) => e > 0)
  .map((n, idx) => {
    return { value: n, index: idx };
  });

console.log(list);

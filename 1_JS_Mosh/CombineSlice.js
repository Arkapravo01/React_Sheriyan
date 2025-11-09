const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const slice=combined.slice()

const combined2=[...first,10,...second]
// console.log(slice)
console.log(combined2);

const fizzBuzzz = (a) => {
  if (typeof a !== "number") return "Not a Number";
  if (a === 0) return 0;
  if (a % 3 !== 0 && a % 5 !== 0) return a;
  else if (a % 3 === 0 && a % 5 === 0) return "FizzBuzz";
  else if (a % 3 === 0) return "Fizz";
  else if (a % 5 === 0) return "Buzz";
};
const op = fizzBuzzz(0);

console.log(op);

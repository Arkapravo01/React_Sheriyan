function createCircle(radius) {
  return (circle = {
    radius,
    draw() {
      console.log("Draw");
    },
  });
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(1);
console.log(circle2);

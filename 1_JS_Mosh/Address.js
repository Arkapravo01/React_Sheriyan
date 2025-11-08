const address = {
  street: "B.Garden",
  city: "Howrah",
  zipCode: 711109,
};

const show = (address) => {
  for (let key in address) {
    console.log(`${key}:${address[key]}`);
  }
};

show(address);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");


const areEqual=(address1,address2)=>{
  return address1===address2
}
console.log(areEqual());

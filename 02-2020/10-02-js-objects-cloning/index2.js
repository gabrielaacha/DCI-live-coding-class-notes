//objects
const car = {
  name: "ford",
  year: "2020",
  color: "red"
};
const newObject = car;
newObject.name = "Fiat";
console.log(car.name);

const newObject2 = Object.assign(car);
const newObject3 = { ...car };
const newObject4 = ...car;

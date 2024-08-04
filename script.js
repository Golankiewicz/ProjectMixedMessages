//This is a advertising catchword generator - a program for Codecademy JS course
const intro = ["Do you want to have a", "Are you looking for a", "Need a"];
//const subject = ["you", 'somebody','they'];
const term = ["fantastic", "splendid", "newest"];
const verb = [
  "Just make your steps to",
  "Do not hasitate and come to",
  "You are welcome to",
];
const location = ["Reading MA", "Urbana IL", "Washington DC"];
let cars = [];
const carsObjectFactory = (make, type, engine) => {
  const car = {
    make,
    type,
    engine,
  };
  cars.push(car);
};

carsObjectFactory("Toyota", "family", "140 HP economical");
carsObjectFactory("Mercedes Benz", "executive", "240 HP powerful");
carsObjectFactory("Maserati", "sporting", "390 HP state of the art");

const pickingFunction = (array) => {
  let chosenIndex = Math.floor(Math.random() * array.length);
  return array[chosenIndex];
};
let chosenCar = pickingFunction(cars);
//Final message below
console.log(
  `${pickingFunction(intro)} ${pickingFunction(term)} ${
    chosenCar.type
  } car? Pick ${chosenCar.make} with a ${
    chosenCar.engine
  } engine. ${pickingFunction(
    verb
  )} our World Of Cars Selling Center at ${pickingFunction(location)} !!! `
);

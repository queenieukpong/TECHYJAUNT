// in javascript there are 3 ways to declare a variable

var idname = 'Patrick'; // globally scoped
let age = 34; // you can only access this within a block of code
const title = 'backend dev'; // you cant override this or reassign it to something else

idname = 'chisom';
age = 48;
// title = 'DevOps';

// console.log(idname);
// console.log(age);
// console.log(title);

// Different types of variables in JavaScript

// Number types
let weight = 75;  //kg - integer
let height = 123.5; //cm - float

// Strings
let car = 'Toyota';

// Boolean
let isTall = true;
let isShort = false;

// Object

let bikeOne = {color: 'blue', brand: 'lexus', speed: 200}
// console.log(bike.brand)
bikeOne.brand = 'Toyota'
// console.log(bike.brand)
let bikeBrands = { date: 1997, bike: bikeOne }
// console.log(bikeBrands.date)
// console.log(bikeBrands,bike.brand)
// console.log(bikeBrands.bike.color)

// Arrays

let cars = ['toyota', 'honda', 'hyundai', 'akura', 6, true]

console.log(cars)
console.log(cars[3])
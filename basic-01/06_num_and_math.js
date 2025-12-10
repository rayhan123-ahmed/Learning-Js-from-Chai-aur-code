const score = 200;

// console.log(score);

const balance = new Number(200);
// console.log(balance);
// console.log(balance.toFixed(2));

const newBalance = balance.toLocaleString().length.toString();
// console.log(newBalance);

// console.log(typeof newBalance);

const newNumber = 24.678;

// console.log(newNumber.toPrecision(3));

const oldNumber = 1000000000;
// console.log(oldNumber.toLocaleString());

//******************MATHS*****************

console.log(Math.abs(-50));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.8));
console.log(Math.min(4, 5, 8, 6, 7));
console.log(Math.max(4, 5, 8, 6, 7));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

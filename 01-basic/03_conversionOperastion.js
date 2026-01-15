// ****************** Conversion ****************

let score = "1235sff";
// console.log(typeof score);

let valueNumber = Number(score);
// console.log(valueNumber);
// console.log(typeof valueNumber);

// "33" => 33
// "33abc" => NaN
// True => 1; False => 0;

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "if i add some value" => True

let someNumber = 33;
let turnIntoStr = String(someNumber);
// console.log(turnIntoStr);
// console.log(typeof turnIntoStr);

// ****************** Opeartions ****************

console.log(0 || "Rayhan"); // "Rayhan"
console.log(5 && "Hello"); // "Hello"

"Rayhan" + " Ahmed"; // "Rayhan Ahmed"

let age = 18;
let msg = age >= 18 ? "Adult" : "Minor";

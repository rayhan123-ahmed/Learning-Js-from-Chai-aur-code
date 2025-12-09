// Primative

// 7 types of data types => string, Number, Boolean, null, undefined, symbal, BigInt

// Number
const score = 100;
const scoreValue = 100.3;
// Boolean
const isLoggedIn = false;
// null
const outsideTemp = null;
// undefined
let userEmail;
// symbal
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// Reference (Non-Primative)

// Object, Arrays , Function

// arryas
const heros = ["shaktiman", "naagraj", "doga"];

// object
let myObj = {
  name: "hitesh",
  age: 22,
};

// function
const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

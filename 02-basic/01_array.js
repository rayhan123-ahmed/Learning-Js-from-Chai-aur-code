// Array

// const newArry = [2, 5, 4, 5];
// const oldArry = ["rayhan", "rifat", "sifat"];
// const anotherArray = new Array(2, 4, 3);
// console.log(newArry[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "ironman", "hulk"];
const dc_heros = ["superman", "batman", "splash"];

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros]; /* Spread method */
// console.log(allHeros);

const anotherArray = [2, 5, 5,[5, 6, 8], [5, ,[8, 9]]];
const newAnotherArray = anotherArray.flat(Infinity);
console.log(newAnotherArray);

let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1,score2,score3));

const userEmail = "rmd09181@gmail.com"

if (userEmail) {
    // console.log("got user email");
} else{
    // console.log("don't have email");
}

               //falsy values//

// false, 0, -0, BigInt 0n, null, undefined, NaN, ""

               //truthy values//

//  "0", 'false', " ", function () {}, [], {}              


const userName = []

if (userName.length === 0) {
    // console.log("array is empty");
}
 
const userId = {}

if (Object.keys(userId).length ===0) {
    // console.log("object is empty"); 
}

// Nullish Coalescing Operator (??) : null, undefined

let value1;

// value1 = 5 ?? 15 
// value1 = null ?? 10 
// value1 = undefined ?? 10 
value1 = null ?? 10 ?? 15 

console.log(value1);

// Terniary Operator

// condition ? true : false

const teaPrice = 500

teaPrice <= 200 ? console.log("less than 200"): console.log("more than 200");





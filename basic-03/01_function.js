// function addTwoNumber(number1,number2){
// console.log(number1 * number2);
// }
// addTwoNumber(5,9);

function addTwoNumber (number1,number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumber(5,8)
// console.log("result:",result);


function isLoggedIn(username = "rifat"){
    if(!username){
 console.log("please enter youre username");
 return
    }
return `${username} just logged in`
}
// console.log(isLoggedIn("rayhan"));


// Example of rest operatore

function calcutionCartProce(...number1){
return number1
}
// console.log(calcutionCartProce(200,500,700,8750));

const user = {
username:"rayhan",
price:500
}

function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     username:"sam",
//     price:600}
// )


const newArray = [200,500,800]

function arrayValue(getArray){
    return getArray[1]
}
// console.log(arrayValue(newArray));
console.log(arrayValue([5000,808,8248]));


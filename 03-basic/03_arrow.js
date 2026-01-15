const user = {
    username: "rayhan ",
    price:999,
    welcomeMassage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMassage()
// user.username = "rifat"
// user.welcomeMassage()
// console.log(this);


function one (){
    let username= "rayhan"
    console.log(this.username);
}
// one()

const two= function men(){
let username = "rifat"
console.log(this.username);
}

// two()

const three = () => {
    let username = "rifat"
console.log(this.username);
}
// three()


// ARROW FUNCTION

// const addTwo = (number1,number2) => {
//     return number1 + number2
// }

// const addTwo = (number1,number2) => (number1+number2)
const addTwo = (number1,number2) => ({username:"rayhan"})

console.log(addTwo(8,15));



// singelton
// Object.create

// object litarate

const mySym = Symbol("key1")

const userJs = {
    Name : "Rayhan",
    "mother name": "rohima",
    [mySym]: "mykey1",
    age : 20,
    location : "narayanganj",
    email : "rmd09181@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays : ["saturday","sunday"]
}
// console.log(userJs.isLoggedIn);
// console.log(userJs.Name)
// console.log(userJs[mySym]);
// console.log(userJs["mother name"]);

userJs.Name = "Rifat"
// Object.freeze(userJs);
userJs.Name = "sifat"
// console.log(userJs);

userJs.greeting = function(){
       return "hello world";
}
console.log(userJs.greeting());

userJs.greetingTwo = function(){
     return `hey my name is ${this.Name}`
}
console.log(userJs.greetingTwo());

 



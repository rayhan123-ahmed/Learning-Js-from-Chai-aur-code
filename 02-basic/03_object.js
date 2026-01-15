const userData = {}

userData.name = "Rayhan"
userData.location = "Dhaka"
userData.isLoggedIn = false

// console.log(userData);
const userInfo ={
    Name:{
        userName :{
firstName : "rayhan",
lastName:"rifat"
        }
    }
}
// console.log(userInfo.Name.userName.lastName);

const obj1 = {1:"b", 2:"s"}
const obj2 = {5:"g", 8:"g"}


// const obj3 = Object.assign({},obj1,obj2)   /* not recomended */

const obj3= {...obj1,...obj2}

// console.log(obj3);
const users = [
    {
        id : 1,
        email : "rmd09181@gmail.com"
    },
    {
        id: 2,
        email: "jhgu48@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(Object.keys(userData));
// console.log(Object.values(userData));
// console.log(Object.entries(userData));
// console.log(userData.hasOwnProperty("isL0ggedIn"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// *********************Object Destructure***********************
const user = {
  name: "Raihan",
  age: 23,
  country: "Bangladesh"
};

const {name,country} = user

console.log(user.name);
console.log(user.country);

const student = {
  id: 101,
  profile: {
    firstName: "Raihan",
    lastName: "Ahmed"
  }
};

const {profile:{firstName,lastName}}= student

console.log(firstName);
console.log(lastName);


const data = {
  userName: "rayhan09",
  stats: {
    followers: 120,
    following: 80
  }
};

const{userName : username, stats:{followers}} = data

console.log(followers);
console.log(username);


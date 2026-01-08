const user = {
  username: "rayhan ahmed rifat",
  Email: "rmd09181@gmail.com",
  passsword: "1234",

  userDetails: function (){
    // console.log(this.username);
  }
}

// console.log(user.username);
// console.log(user.userDetails());


function user1(usesrName,loginCount,isLoggedIn) {
    this.usesrName = usesrName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this
}

const userOne = new  user1("rayhan",12,true)
const userTwo = new user1("rifat",13,false)

console.log(userOne);
console.log(userTwo);

console.log(this);

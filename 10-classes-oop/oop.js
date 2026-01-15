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


function users(usesrName,loginCount,isLoggedIn) {
    this.usesrName = usesrName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this
}

const userOne = new  users("rayhan",12,true)
const userTwo = new users("rifat",13,false)

console.log(userOne);
console.log(userTwo);

console.log(this);

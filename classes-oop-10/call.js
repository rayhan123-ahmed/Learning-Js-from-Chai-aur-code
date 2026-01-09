function setUserName(userName) {
    this.userName = userName
}


function creatUser(userName,email,password) {
    setUserName.call(this,userName)

    this.email = email
    this.password = password
}

const rayhan = new creatUser('rayhan','rmd09181@gmail.com',123)
console.log(rayhan);

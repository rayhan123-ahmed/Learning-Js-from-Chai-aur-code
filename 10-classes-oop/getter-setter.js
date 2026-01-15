class User {
    constructor(password,email) {
        this.password = password
        this.email = email
    }

     set email(value){
        this._email = value.toUpperCase();
     }
     get email(){
      return `${this._email}`
     }


    set password(value){
        this._password = value.toUpperCase()
    }
    get password(){
        return `${this._password}`
    }

}


const rifat = new User('rayhan054','rmd-09181@gmail.com');

console.log(rifat.password);
console.log(rifat.email);

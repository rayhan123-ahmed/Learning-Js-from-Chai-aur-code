 function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'password',{
       get: function(){
        return this._password.toUpperCase()
       },
       set: function(value){
          this.password = value
       }
    })
    Object.defineProperty(this,'email',{
       get: function(){
        return this._email.toUpperCase()
       },
       set: function(value){
          this.email = value
       }
    })

}

const rayhan = new User('rmd09187@gmail.com','uegry88')

console.log(rayhan.password);
console.log(rayhan.email);


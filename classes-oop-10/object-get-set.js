const User = {
  _email: 'rmd09181@gmail.com',
  _password: 'yertyd568',

  get email() {
    return this._email.toUpperCase()
  },

  set email(value) {
    this._email = value
  }
}

const rifat = Object.create(User)

console.log(rifat.email)      // RMD09181@GMAIL.COM



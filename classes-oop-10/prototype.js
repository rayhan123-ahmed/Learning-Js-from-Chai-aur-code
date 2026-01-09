let myHero =["thor","ironMan"]

let heroPower = {
    thor: "hammer",
    ironMan : "superpower",

    getThorPower : function(){
     console.log(`thor has power of ${this.thor}`); 
    }
}

Object.prototype.rayhan = function(){
    console.log(`rayhan is presenet in all object `);
}

Array.prototype.rifat = function(){
    console.log(`rifat is only present in array`);
    
}

// heroPower.rayhan()
// myHero.rayhan()
// myHero.rifat()
// heroPower.rifat()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)


let newuser = "rayhan     "
let anotherUser = "sifat       "

String.prototype.trueLenght = function(){
    console.log(`True length is : ${this.trim().length}`);
}

newuser.trueLenght();
anotherUser.trueLenght();
// first promise
const promiseOne = new Promise ((resolve,reject)=>{
  //  Do asych task
 //  DB calls, cryptographic, network
 setTimeout(function(){
//   console.log("async task is complete");
  resolve()
 },1000)
})

promiseOne.then(function(){
    // console.log("Promise is consumed");
})

// second Promise
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("async task 2 is complte");
        resolve()
    },1000)
}).then(()=>{
    // console.log("promise 2 is consumed");
})

// Third Promise

const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({name: "rayhan", email: "rmd09181@gmail.com"})
    },1000)
})

thirdPromise.then(function(user){
//   console.log(user.name);
//   console.log(user.email);
})

// fourth promises 

 new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: "Rayhan", email: "rmd09181@gmail.com"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}).then((user)=>{
    // console.log(user);
    return user
})
.then((user)=>{
//    console.log(user.username);
   return(user.email)
}).then((email)=>{
//  console.log(email);
})
.catch((error)=>{
// console.log(error);
})
.finally(()=>{{
    // console.log("the promise either resolve or rejected ");
}
})


// Fifth promises 

const FifthPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         let error = false
     if (!error) {
        resolve({username: "rayhan", password: "12345"})
     } else{
        reject("ERROR: something went wrong in fifth promise")
     }
    },1000)
})

async function FifthPromiseResolve() {
    try {
        const result = await FifthPromise;
        // console.log(result);
    } catch (error) {
        // console.log(error);
    }finally{
        // console.log("Fifth promise is either resolved or rejected");
    }
}
 FifthPromiseResolve()


 //  async function 
 async function getData() {
    try {
        const response = await fetch('https://api.github.com/users/rayhan123-ahmed')
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log("error");  
    }
 }

 getData()

 fetch('https://api.github.com/users/rayhan123-ahmed')
 .then((response)=>{
   return response.json()
})
 .then((Data)=>{
console.log(Data);
})
 .catch((error)=>{
   console.log(error);
})
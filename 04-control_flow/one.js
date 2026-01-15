// if 
//  const isLoggedIn = true
//  const tampreture = 25


//  if(tampreture < 30){
// console.log("less than 30 ");
//  } else{
//     console.log("greater than 30");
//  }

 // less then -- <, greater than -- >, <= , >= , == , != , === , !== , 

//  const score = 200

//  if (score  > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
//     console.log(`user power : ${power}`);
// }
//  console.log(`user power : ${power}`); this will creat an error 

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }  else if (balance < 600) {
//     console.log("less than 600");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const isLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (isLoggedIn && debitCard) {
    console.log("allowed to do shopping");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("give account accses");
}

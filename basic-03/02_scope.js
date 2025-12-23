

if (true) {
    let a = 2
    const b = 3
    var c = 4
}
//  console.log(a);
//  console.log(b);
//  console.log(c);

function one (){
    const username = "rayhan"

    function two (){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
//  one()

if (true) {
    const username = "rayhan"
    if(username === "rayhan"){
const website = " youtube"
// console.log(username + website);
    }
}
// console.log(username);

addONe(5)
function addONe (number){
    return number + 1
} 



addTwo()
const addTwo = function (number){   /*this will creat an issue */  
    return number + 2
}
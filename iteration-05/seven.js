// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);            //using map


// const newNums = []
//  myNums.forEach( (num) => {
    // newNums.push(num+10)              //using forEach
// })
// console.log(newNums);


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums
        .map( (number) => number*10)
        .map( (number) => number+1)             //using chain 
        .filter( (number) => number >= 40)

 console.log(newNums);
        



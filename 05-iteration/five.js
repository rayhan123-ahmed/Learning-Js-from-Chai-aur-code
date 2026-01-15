const codding = ["java",'python',"rubby","c++"]

codding.forEach( function(item){
// console.log(item);
} )

const number = [1, 2, 3, 4, 5]
 number.forEach( function(value){
//    console.log(value);
 })


 const Name = ["Raihan", "Samiya", "Hasan"]

 Name.forEach( function(value){
    // console.log(`hello ${value}`);
 })


  const prices = [100, 200, 300];

  prices.forEach( function(price,index){
// console.log(`item ${index+1} price is ${price}`);
  })


  const myCodding = [
    {
        languageNAme:"javascript",
        fileName : "js"
    },
    {
        languageNAme:"java",
        fileName : "java"
    },
    {
        languageNAme:"python",
        fileName : "py"
    }
  ]
  myCodding.forEach( (value) =>{
    console.log(value.fileName,value.languageNAme);
  }) 
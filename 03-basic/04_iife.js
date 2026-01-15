// Immediately Invoked Function Expressions IIFE


(function one(){
    console.log("data base connected");
})();

(  () =>{
    console.log("two data base connected");
})();

(  (name) =>{
    console.log(`three data base connected ${name}`);
})("rayhan")
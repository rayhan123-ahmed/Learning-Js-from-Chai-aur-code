const myObj = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(myObj);



const product = {
    name: "apple",
    price: 299,
    isAvailbail: true,

    isThatReady: function(){
        console.log('not ready yet');
    }
}

console.log(Object.getOwnPropertyDescriptor(product,'name'));

Object.defineProperty(product,'name',{
  writable: false,
  enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(product,'name'));

for (let [key,value] of Object.entries(product)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}


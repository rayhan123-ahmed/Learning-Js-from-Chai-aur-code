// for of 

const arr = [1,2,3,4,5]

for (const value of arr) {
    // console.log(value);
}

const myName = ["rayhan","rifat","samiya"]

for (const names of myName) {
    // console.log(`list of name ${names}`);
}

const names = "rayhan"

for (const name of names) {
if (name == "h") {
    // console.log(`detected h`);
    continue
}
// console.log(`the name is ${name}`);
}

// Maps

const map = new Map()

map.set("BD","Bangladesh")
map.set("USA","United state of america")
map.set("FA","Farnch")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,'-:', value);
}

const myObject ={
    game1: "NFS",
    game1:"spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(key,'-:',value);       so its this tecnick not working in object
// }
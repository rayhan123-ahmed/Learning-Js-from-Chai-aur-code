// for

for (let index = 0; index <= 5; index++) {
    const el = index;
 if (el == 3) {
    // console.log("3 is best number");
 }
    // console.log(el);
}

for (let i = 1; i <= 5; i++) {
    // console.log(`outter loop: ${i}`);
    for (let a = 1; a <=5 ; a++) {   
    // console.log(`inner loop: ${a} and inner loop: ${i}`);
    // console.log("inner loop " + i + `*`+ a + ` = ` + i*a);
    }
}


const myARray = ["rayhan", "nafis", "samiya"]
for (let index = 0; index < myARray.length; index++) {
    const element = index;
    // console.log(element);

}


// break and continue

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`valuse of index is ${index}`);
// }

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`valuse of index is ${index}`);
}
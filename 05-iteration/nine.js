const myNums = [1,2,3]

// const totalNums = myNums.reduce( (acc,currval) => acc+currval,2 )

const totalNums = myNums.reduce( (acc,carrval)=>{
//    console.log(`acc: ${acc} and currval ${carrval}`);
   return acc + carrval
},2)

// console.log(totalNums);

const shoppingCart =[
    {
        book: "Englsh",
        price:299
    },
    {
        book: "Bangla",
        price:599
    },
    {
        book: "Math",
        price:399
    }
]
//  const totalShppigCost = shoppingCart.reduce( (acc,item) => acc+item.price,0) 

const totalShppigCost = shoppingCart.reduce( (acc,item) =>{
    return acc+item.price
},0)
 console.log(totalShppigCost);
 
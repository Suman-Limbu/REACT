//array methos



// 1.map()
// const nums=[1,2,3,4]
// const newNums=nums.map((itm)=>itm*2)
// console.log(newNums)

//2. filter()
// const nums=[1,2,3,4]
// const newFilter=nums.filter((itm)=>itm===2)
// console.log(newFilter)

//3. find()
// const nums=[{id:1},{id:2},{id:3,name:"a"},{id:3,name:"b"},{id:4}]
// const newFind=nums.find((itm)=>itm.id===3)
// console.log(newFind)

// 4.reduce()
// const nums=[1,2,3,4,5];
// const total=nums.reduce((acc,cur)=>{
//     return acc+cur
// },0)
// console.log(total)


function greet(name, callback) {
  callback(name);
}

greet("Suman", name => {
  console.log("Hello " + name);
});
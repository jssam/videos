//merge array
//remove dublicates
let a = ["red","orange","blue"]
let b= ["red","blue","green"]
let newArray = [...a,...b]
let hashSet = new set(newArray)
let ans = Array.from(hashSet)
console.log(ans)
// ans 
//"red","orange","blue","green"
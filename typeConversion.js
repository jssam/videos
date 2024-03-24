var number = 123;
var strNumber = number.toString();
console.log(strNumber); // Output: "123"

var number = 456;
var strNumber = `${number}`;
console.log(strNumber); // Output: "456"


var strNumber = "789";
var intNumber = parseInt(strNumber);
console.log(intNumber); // Output: 789

var strNumber = "1010";
var intNumber = parseInt(strNumber, 2); // Parses as binary
console.log(intNumber); // Output: 10


let strNumber = "123abc";
let intNumber = parseInt(strNumber); // parseInt() ignores non-numeric characters
console.log(intNumber); // Output: 123

let number = Number(strNumber);
console.log(number); // Output: NaN

const animals = 
['ant', 'bison', 'camel', 'duck', 'elephant'];
[0    ,  1,       2,       3,        4   ]
//arrayLength = 5
//slice(start)
console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

//slice(start,end) end not included
console.log(animals.slice(2, 4));
//["camel", "duck"]

console.log(animals.slice(1, 5));
//["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//["duck", "elephant"]

console.log(animals.slice(2, -1));
//["camel", "duck"]

//slice()
console.log(animals.slice());
//["ant", "bison", "camel", "duck", "elephant"]
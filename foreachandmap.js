// Using forEach to square each element in the array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (element, index, array) 
{
  // Squaring each element
  array[index] = element * element;
});

console.log(numbers);
// Output: [1, 4, 9, 16, 25]

// Using map to create a new array with squared values
const num = [1, 2, 3, 4, 5];

const squaredNumbers = num.map(function (element) 
{
  return element * element;
});

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

function calculate() {
    // Local variable
    let x = 10;
    let y = 5;
    
    // Performing some calculation using local variables
    let result = x + y;
    
    console.log('Result:', result);
  }
  
  // Trying to access local variables outside the function (will result in an error)
  console.log('Value of x:', x);

  // Global variable
let globalVar = 'I am global!';

function printGlobal() {
  console.log(globalVar);
}

// Accessing global variable
printGlobal();

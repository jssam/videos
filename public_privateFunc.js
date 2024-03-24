class Calculator {
    // Public function
    add(a, b) {
      return a + b;
    }
  
    // Private function
    #multiply(a, b) {
      return a * b;
    }
  
    // Another public function
    compute(a, b) {
      // Calling the private function
      const result = this.#multiply(a, b);
      console.log('Result of multiplication:', 
      result);
      
      // Calling the public function
      const sum = this.add(a, b);
      console.log('Sum:', sum);
    }
  }
  
  // Create an instance
  const myCalculator = new Calculator();
  
  // Call the public function
  const additionResult = myCalculator.add(5, 3);
  
  // Uncommenting the next line will result in an error
  // const multiplicationResult = 
  //myCalculator.#multiply(5, 3);
  
  console.log('Addition Result:', additionResult);
  
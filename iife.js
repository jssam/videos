//IIFE in js

(function() {
    console.log('hello');
})();

const counterModule = (function() {
    let count = 0;
  
    function increment() {
      count++;
      console.log('Count:', count);
    }
  
    function decrement() {
      count--;
      console.log('Count:', count);
    }
  
    return {
      increment,
      decrement
    };
  })();
  
  counterModule.increment();
  counterModule.decrement();
  
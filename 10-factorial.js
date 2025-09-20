#!/usr/bin/node

function factorial(n) {
  // Handle NaN
  if (isNaN(n)) {
    return 1;
  }

  // Base case: 0! = 1, 1! = 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Get argument from command line
const arg = process.argv[2];  
const num = parseInt(arg);  

console.log(factorial(num));

// Traditional function version
function add1(a, b) {
  return a + b;
}

// Arrow function version
const add2 = (a, b) => a + b;

// Exporting both functions
module.exports = { add1, add2 };

// Example usage
console.log(add1(2, 3)); // Output: 5
console.log(add2(2, -3)); // Output: -1
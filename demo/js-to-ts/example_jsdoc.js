/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add1(a, b) {
  return a + b;
}

/**
 * Another function that adds two values.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const add2 = (a, b) => a + b;


// Exporting both functions
module.exports = { add1, add2 };


// Example usage
console.log(add1(2, 3)); // Output: 5
console.log(add2(2, -3)); // Output: -1
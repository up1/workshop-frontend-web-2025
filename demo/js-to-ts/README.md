# The process of moving from JavaScript (JS) to TypeScript (TS)* using JSDoc as an intermediate step


## 1. Create JavaScript project
```
$npm init -y
```

Create `example.js`
```
// Traditional function version
function add1(a, b) {
  return a + b;
}

// Arrow function version
const add2 = (a, b) => a + b;

// Exporting both functions
module.exports = { add1, add2 };
```

## 2. Add [JSDoc](https://jsdoc.app/) in project
```
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
```

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
* Easy to read in IDE/Editor
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

## 3. Migrate to TypeScript

Install TypeScript 
```
$npm install --save-dev typescript
```

Install Type Definitions for Libraries
```
$npm install --save-dev @types/node @types/react @types/react-dom
```

Create a tsconfig.json file
```
$npx tsc --init
```

Configure tsconfig.json
```
"rootDir": "./src",
"outDir": "./dist",
```

Create file `src/example.ts`
* Add [TSDoc](https://github.com/microsoft/tsdoc)
```
/**
 * Adds two numbers together.
 * @param a 
 * @param b 
 * @returns 
 */
const add = (a: number, b: number): number => {
  return a + b;
};

// Exporting the function
export { add };

// Example usage
console.log(add(2, 3)); // Output: 5
```

Build and Run
```
$npm run build
$npm run start
```




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

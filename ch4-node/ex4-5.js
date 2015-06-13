var Stack = require('./Stack.js').Stack;

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}

function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5)); // displays 120
console.log(fact(5)); // displays 120

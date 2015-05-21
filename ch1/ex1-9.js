function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}
print(factorial(4)); // displays 24
print(factorial(5)); // displays 120
print(factorial(10)); // displays 3628800

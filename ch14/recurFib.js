function recurFib(n) {
  if (n < 2) {
    return n;
  }
  else {
    return recurFib(n-1) + recurFib(n-2);
  }
}
print(recurFib(10)); // displays 55

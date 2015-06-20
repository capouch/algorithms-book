function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

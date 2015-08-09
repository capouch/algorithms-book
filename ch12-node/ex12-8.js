var start = new Date().getTime();
for (var i = 1; i < 100; ++i) {
  console.log(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("The elapsed time was: " + elapsed +
 " milliseconds.");

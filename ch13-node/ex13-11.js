var dispArr = require('./dispArr.js').dispArr;
var seqSearch = require('./seqSearchBetter.js').seqSearch;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.random() * 11);
}

dispArr(nums);
console.log();

rl.setPrompt("\nEnter a value to search for:  ");
rl.prompt();
rl.on('line', function(line) {
  var val = parseInt(line);
  if (seqSearch(nums, val)) {
    console.log("Found element: ");
    console.log();
    dispArr(nums);
  }
  else {
    console.log(val + " is not in array.");
  }
  rl.close();
});

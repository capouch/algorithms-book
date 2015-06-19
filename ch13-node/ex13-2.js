var dispArr = require('./dispArr.js').dispArr;
var seqSearch = require('./ex13-1.js').seqSearch;

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

dispArr(nums);

rl.setPrompt("\nEnter a grade:  ");
rl.prompt();
rl.on('line', function(line) {
  num = parseInt(line);
  console.log();
  if (seqSearch(nums, num)) {
    console.log(num + " is in the array.");
  }
  else {
    console.log(num + " is not in the array.");
  }
console.log();
dispArr(nums);
rl.close();
});


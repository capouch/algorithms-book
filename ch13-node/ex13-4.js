var dispArr = require('./dispArr.js').dispArr;
var seqSearch = require('./ex13-3.js').seqSearch;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

rl.setPrompt("\nEnter a number to search for:  ");
rl.prompt();
rl.on('line', function(line) {
  var num = line;
  console.log();
  var position = seqSearch(nums, num);
  if (position > -1) {
    console.log(num + " is in the array at position " + position);
  }
  else {
    console.log(num + " is not in the array.");
  }
  console.log();
  dispArr(nums);
  rl.close();
});

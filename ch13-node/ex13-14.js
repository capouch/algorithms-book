var insertionSort = require('./insertionSort.js').insertionSort;
var dispArr = require('./dispArr.js').dispArr;
var binSearch = require('./binSearch.js').binSearch;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
  for (var i = position-1; i > 0; --i) {
    if (arr[i] == data) {
      ++count;
    }
    else {
      break;
    }
  }
  for (var i = position+1; i < arr.length; ++i) {
    if (arr[i] == data) {
      ++count;
    }
    else {
      break;
    }
  }
}
  return count;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
insertionSort(nums);
dispArr(nums);
console.log();

rl.setPrompt("\nEnter value to count:  ");
rl.prompt();
rl.on('line', function(line) {
  var val = parseInt(line);
  var retVal = count(nums, val);
  console.log("Found " + retVal + " occurrences of " + val + ".");
  rl.close();
}); 

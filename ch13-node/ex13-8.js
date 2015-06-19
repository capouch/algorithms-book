var dispArr = require('./dispArr.js').dispArr;
var findMin = require('./findMin.js').findMin;
var findMax = require('./findMax.js').findMax;

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log();
console.log();
console.log("The minimum value is: " + minValue);
var maxValue = findMax(nums);
console.log();
console.log("The maximum value is: " + maxValue);

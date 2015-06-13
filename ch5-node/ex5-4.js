var Queue = require('./Queue.js').Queue;
var distribute = require('./Radix.js').distribute;
var collect = require('./Radix.js').collect;
  
function dispArray(arr) {
 for (var i = 0; i < arr.length; ++i) {
   process.stdout.write(arr[i] + " ");
   }
 }

var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);
console.log("\n");

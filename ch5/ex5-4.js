load('Queue.js');
load('radix.js');
  
var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
print("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
print("\n\nAfter radix sort: ");
dispArray(nums);
print("\n");

function distribute(nums, queues, n, digit) {
 for (var i = 0; i < n; ++i) {
  if (digit == 1) {
    queues[nums[i]%10].enqueue(nums[i]);
    }
  else {
    queues[(Math.floor(nums[i]/10))].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
 var i = 0;
 for (var digit = 0; digit < 10; ++digit) {
   while (!queues[digit].empty()) {
     nums[i++] = queues[digit].dequeue();
     }
   }
}

module.exports.distribute = distribute;
module.exports.collect = collect;

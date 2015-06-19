load('./insertionSort.js');
load('./dispArr.js');
load('./ex13-13.js')

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
print();
putstr("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("Found " + retVal + " occurrences of " + val + ".");


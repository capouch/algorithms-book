load ('./CArray.js');

var nums = new CArray(10);
nums.setData();
print('Start: ' + nums.toString());
nums.mergeSort();
print('Done: ' + nums.toString());

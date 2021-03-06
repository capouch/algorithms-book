load('./CArray.js');

var nums = new CArray(10000);
nums.setData();
var start = new Date().getTime();
nums.shellSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");
nums.clear();
nums.setData();
start = new Date().getTime();
nums.shellSort2();
stop = new Date().getTime();
print("Shellsort with dynamic gap sequence: " + elapsed + " ms.");


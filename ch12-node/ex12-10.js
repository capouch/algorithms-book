var CArray = require('./CArray.js').CArray;

var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort: \n");
console.log(nums.toString());
console.log("\nDuring Shellsort: \n");
nums.shellSort();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());

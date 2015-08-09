var CArray = require('./CArray.js').CArray;

var nums = new CArray(100);
nums.setData();
console.log("Before shellsort2: \n");
console.log(nums.toString());
nums.shellSort2();
console.log("\nAfter shellSort2: \n");
console.log(nums.toString());

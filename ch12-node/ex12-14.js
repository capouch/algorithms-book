var CArray = require('./CArray.js').CArray;

var nums = new CArray(10);
nums.setData();
console.log(nums.toString());
nums.mergeSort();
console.log(nums.toString());

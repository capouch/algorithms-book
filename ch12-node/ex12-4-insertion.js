var CArray = require('./CArray.js').CArray;

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.insertionSort();
console.log();
console.log(mynums.toString());

var CArray = require('./CArray.js').CArray;
//var bubbleSort = require('./bubbleSort.js).bubbleSort;

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log();
console.log(mynums.toString());

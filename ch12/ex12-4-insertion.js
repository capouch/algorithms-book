load('./CArray.js');

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.insertionSort();
print();
print(mynums.toString());

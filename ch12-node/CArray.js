function CArray(numElements) {
  this.gaps = [5,3,1];
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  // Unused in Node version
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  this.bubbleSort = require('./bubbleSort.js').bubbleSort;
  this.selectionSort = require('./selectionSort.js').selectionSort;
  this.insertionSort = require('./insertionSort').insertionSort;
  this.shellSort = require('./shellSort.js').shellSort;
  this.shellSort2 = require('./shellSort2.js').shellSort2;
  this.mergeSort = require('./mergeSort.js').mergeSort;
  }
 }
 
function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() *
      (this.numElements+1));
  }
 }
 
function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports.CArray = CArray;

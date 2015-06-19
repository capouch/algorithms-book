var binSearch = require('./binSearch.js').binSearch;
var dispArr = require('./dispArr.js').dispArr;
var insertionSort = require('./insertionSort.js').insertionSort;

var fs = require('fs');

var lines = fs.readFileSync('./words.txt').toString().split("\n");

// Node-ism one too many lines
lines.splice(lines.length-1,1);

var words = lines.toString().split(" ");

insertionSort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  console.log("Found " + word + " at position " + position + ".");
  console.log("Binary search took " + elapsed + " milliseconds.");
}
else {
  console.log(word + " is not in the file.");
}

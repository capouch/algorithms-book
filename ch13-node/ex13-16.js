var fs = require('fs');

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

var lines = fs.readFileSync('./words.txt').toString().split("\n");

// Node-ism one too many lines
lines.splice(lines.length-1,1);

var words = lines.toString().split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  console.log("Found " + word + " at position " + position + ".");
  console.log("Sequential search took " + elapsed + " milliseconds.");
}
else {
  console.log(word + " is not in the file.");
}


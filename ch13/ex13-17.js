load('./binSearch.js');
load('./dispArr.js');
load('./insertionSort.js');

var words = read("words.txt").split(" ");
insertionSort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  print("Found " + word + " at position " + position + ".");
  print("Binary search took " + elapsed + " milliseconds.");
}
else {
  print(word + " is not in the file.");
}

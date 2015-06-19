var BST = require('./BSTtree.js').BST;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prArray(arr) {
  process.stdout.write(arr[0].toString() + ' ');
  for (var i = 1; i < arr.length; ++i) {
    process.stdout.write(arr[i].toString() + ' ');
    if (i % 10 === 0) {
      process.stdout.write("\n");
      }
    }
}

function genArray(length) {
  var arr = [];
  for (var i = 0; i < length; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
    }
  return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
   var g = grades[i];
   var grade = gradedistro.find(g);
   if (grade === null) {
     gradedistro.insert(g);
     }
   else {
     gradedistro.update(g);
     }
}

var valueEntryPhase = true;

rl.setPrompt("\nEnter a grade:  ");
rl.prompt();
rl.on('line', function(line) {
  if (!valueEntryPhase && line === 'n')
    rl.close();
  // Allow anything but 'n' to continue
  else if(!valueEntryPhase && line != 'n') {
    valueEntryPhase = true;
    rl.setPrompt("\nEnter a grade: ");
    rl.prompt();
    }
  else {
    // User wants to look up a grade value
    var g = parseInt(line);
    var aGrade = gradedistro.find(g);
    if (aGrade === null) {
      console.log("No occurrences of " + g);
      }
    else {
      console.log("Occurrences of " + g + ": " + aGrade.count);
      }
    if (valueEntryPhase) {
      valueEntryPhase = false;
      rl.setPrompt("Look at another grade (y/n)? ");
      rl.prompt();
    }
  }
}).on('close',function(){
  process.exit(0);
});


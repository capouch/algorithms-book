var BST = require('./BSTtree.js').BST;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
console.log("\n");
rl.setPrompt("Enter a value to search for:  ");
rl.prompt();
rl.on('line', function(line) {
  var value = line;
  var found = nums.find(value);
  if (found !== null) {
    console.log("Found " + value + " in the BST.");
  }
  else {
    console.log(value + " was not found in the BST.");
  }
  rl.close();
}).on('close',function(){
  process.exit(0);
});

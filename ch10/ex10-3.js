load("BSTtree.js");
load("traverse.js");

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
var min = nums.getMin();
print("\nThe minimum value of the BST is: " + min);
var max = nums.getMax();
print("The maximum value of the BST is: " + max);

var BST = require('./BSTtree.js').BST;

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log();
console.log("Preorder traversal: ");
nums.preOrder(nums.root);
console.log();
console.log("Postorder traversal: ");
nums.postOrder(nums.root);
console.log();

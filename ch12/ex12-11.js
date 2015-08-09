load('./CArray.js');

var nums = new CArray(100);
nums.setData();
print("Before shellsort2: \n");
print(nums.toString());
nums.shellSort2();
print("\nAfter shellSort2: \n");
print(nums.toString());

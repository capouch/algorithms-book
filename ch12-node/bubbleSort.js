function bubbleSort() {
  console.log("Bubble sort");
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer-1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
  // Uncomment to watch the algorithm in action
  //console.log(this.toString());
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}



module.exports.bubbleSort = bubbleSort;

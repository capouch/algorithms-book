function selectionSort() {
  console.log("Selection sort");
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
    min = outer;
    for (var inner = outer + 1;
      inner <= this.dataStore.length-1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
  swap(this.dataStore, outer, min);
  // console.log(this.toString());
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports.selectionSort = selectionSort;

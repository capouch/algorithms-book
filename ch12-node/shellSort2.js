function shellSort2() {
  var N = this.dataStore.length;
  var h = 1;
  while (h < N/3) {
    h = 3 * h + 1;
    }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
          j -= h) {
        swap(this.dataStore, j, j-h);
        }
      }
    h = (h-1)/3;
    }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports.shellSort2 = shellSort2;

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      if (i > 0) {
        swap(arr,i,i-1);
      }
      return true;
    }
  }
  return false;
}

function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

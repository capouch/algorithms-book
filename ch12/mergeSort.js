function mergeSort() {
  this.dataStore = mergeSort(this.dataStore);

  // Standard merge
  function merge(left,right){
      var result = [];
      var leftLen = left.length;
      var rightLen = right.length;
      while (leftLen > 0 || rightLen > 0){
          if (leftLen > 0 && rightLen > 0){
  	    // Both A and B are still populated
              if (left[0] < right[0]){
                  result.push(left.shift());
                  leftLen -= 1;
              }
              else if (right[0] <= left[0]){
                  result.push(right.shift());
                  rightLen -= 1;
              }
          }
          else if (leftLen > 0){
              result.push(left.shift());
              leftLen -= 1;
          }	
          else if (rightLen > 0){
              result.push(right.shift());
              rightLen -= 1;
          }
      } 
      return result;
  }
  
  function mergeSort(array){
      var length = array.length;
      if (length <= 1){
  	// This is the base case for the recursion
        return array;
      }
      var q = Math.floor(length/2);
      var left = mergeSort(array.slice(0,q));
      var right = mergeSort(array.slice(q));
      return merge(left, right);
   }
 } 

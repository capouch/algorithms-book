function dispArr(arr) {
 for (var i = 0; i < arr.length; ++i) {
   process.stdout.write(arr[i] + " ");
   if (i % 10 == 9) {
     process.stdout.write("\n");
     }
   }
 if (i % 10 != 0) {
   process.stdout.write("\n");
   }
}

module.exports.dispArr = dispArr;

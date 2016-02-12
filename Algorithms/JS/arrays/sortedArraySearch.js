 // *  Time Complexity: 0(logn) + 0(logn) => 0(logn)
 // *  Auxiliary Space Complexity: 0(logn) + 1 => 0(logn)


function sortedArraySearch(sortedArray, target) {

  var result = false;

  var hunt = function(start, end){
    if (start >= end-1 && (sortedArray[start] === target || sortedArray[end] === target)){
      result = true; // 0(1)
      return;
    } else if (start >= end-1){
      return;
    }

    var mid = Math.floor((start + end) / 2); // 0(1)

    if (sortedArray[mid] === target){
      result = true; // 0(1)
      return;
    } else if (target > sortedArray[mid]){
      hunt(mid, end);
    } else if (target < sortedArray[mid]){
      hunt(start, mid);
    }

  }

  hunt(0, sortedArray.length-1); // 0(logn)
  return result; // 0(1)
};

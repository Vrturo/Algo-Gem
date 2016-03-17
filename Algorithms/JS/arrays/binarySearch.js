// implement a recursive way tp check if an item is in the array


function binarySearch(item, arr){

    function helper(start, end){
      var mid = Math.floor((start + end)/2);
      if (arr[mid] === item){
        return true
      }
      if(start >= end - 1){
        if (arr[start] === item || arr[end] === item){
          return true;
        }
        else{
          return false;
        };
      }
      if (item > arr[mid]){
        return helper(mid, end);
      }
      else if(item < arr[mid]){
        return helper(start, mid);
      }
    }
    return helper(0, arr.length -1);
}

console.log(binarySearch(5, [1, 2, 3, 5, 7, 8]));

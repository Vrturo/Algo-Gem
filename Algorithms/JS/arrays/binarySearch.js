// implement a recursive way tp check if an item is in the array


// function binarySearch(item, arr){

//     function helper(start, end){
//       var mid = Math.floor((start + end)/2);
//       if (arr[mid] === item){
//         return true
//       }
//       if(start >= end - 1){
//         if (arr[start] === item || arr[end] === item){
//           return true;
//         }
//         else{
//           return false;
//         };
//       }
//       if (item > arr[mid]){
//         return helper(mid, end);
//       }
//       else if(item < arr[mid]){
//         return helper(start, mid);
//       }
//     }
//     return helper(0, arr.length -1);
// }


function binarySearch(item, arr){
      var start = 0,
          end = arr.length - 1,
          mid = Math.floor((start + end)/2);

      if (arr[start] === item || arr[end] === item || arr[mid] === item){
        return true;
      }
      if(start >= end - 1){
        if(arr[end] === item || arr[start] === item){
          return true;
        }
        else {
          return false;
        };
      }
      if (item > arr[mid]){
        return binarySearch(item, arr.splice(0, mid));
      }
      else if(item < arr[mid]){
        return binarySearch(item, arr.splice(mid, end));
      }
}

console.log(binarySearch(5, [1, 2, 3, 5, 7, 8]));

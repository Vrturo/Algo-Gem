// implement a recursive way tp check if an item is in the array

function binarySearch( item, arr ){
    var l = 0,
        r = arr.length -1
    if( r>=l ){ // check if there are elements in the array
            var mid = Math.floor( r/2 );

            // If the element is present at the middle itself
            if( arr[l] === item || arr[r] === item || arr[mid] === item ) return true;

            // If element is smaller than mid, then it can only
            // be present in left subarray
            if( arr[mid] > item )
               return binarySearch( item, arr.splice( l, mid ));

            // Else the element can only be present in right
            // subarray
            return binarySearch( item, arr.splice(mid, r));
    }

    // We reach here when element is not present in array
    return false;
}

// ----------------------------------------------------

function binarySearch(item, arr){
      var start = 0,
          end = arr.length - 1,
          mid = Math.floor((start + end)/2);

      if( arr[start] === item || arr[end] === item || arr[mid] === item ){
        return true;
      }
      if( start >= end ){
        if( arr[end] === item || arr[start] === item ){
          return true;
        }
        else {
          return false;
        };
      }
      if( item > arr[mid] ){
        return binarySearch(item, arr.splice(0, mid));
      }
      else if( item < arr[mid] ){
        return binarySearch(item, arr.splice(mid, end));
      }
}

console.log(binarySearch(8, [1, 2, 3, 5, 7, 8]));

// Given a sorted array of integers, find the number of occurrences of a given target value.
// Your algorithm’s runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return 0

// **Example : **
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return 2.

/**
 * @param {array[], number} nums k
 * @return {number}
 */

 function countOccur(nums, k){


    function bSearch(arr, searchFirst){
        var low = 0,
          high = arr.length -1,
          result = -1,
          mid;

        while( low<=high ){
            mid = Math.floor( (low+high)/2 );

            if( arr[mid] === k ){
              result = mid;
              searchFirst ? high = mid - 1 : low = mid + 1;
            } else if( k < arr[mid]){
              high = mid-1
            } else {
              low = mid+1
            }
        }
        return result;
    }

    var firstIndex = bSearch(test, true);
    if(firstIndex === -1){
        return 0;
    } else {
        var lastIndex = bSearch(test, false);
        return (lastIndex - firstIndex)+1
    }
}
var test = [1,2,2,2,2,3,4,5,5,5,5,6,6,7];
var k = 5;

console.log( countOccur(test, k) );

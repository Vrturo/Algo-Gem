// In this problem, solve a famous programming interview question to find the index of the first occurrences of a number
// in a sorted array using binary search in O(log n) time.

// ex. input
// [1,2,2,2,2,3,4,5,5,5,5,6,6,7] 2
// [1,2,2,2,2,3,4,5,5,5,5,6,6,7] 8
// [1,2,2,2,2,3,4,5,5,5,5,6,6,7] 5

// ex. output
// 1
// -1
// 7

/**
 * @param {array[], number} nums k
 * @return {number}
 */


function findFirst(nums, k){
    var low = 0,
        high = nums.length -1,
        result = -1,
        mid;

    while( low<=high ){
        mid = Math.floor( (low+high)/2 );

        if( nums[mid] === k ){
          result = mid;
          high = mid - 1;
        } else if( k < nums[mid]){
          high = mid-1
        } else {
          low = mid+1
        }
  }
  return result;
}

console.log(findFirst([1,2,2,2,2,3,4,5,5,5,5,6,6,7], 5))

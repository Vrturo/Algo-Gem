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

// create a function that performs a binary search until item is found and decrements index until first occurence is found
// set lowest index, and highest index variables
// set result to -1 in case no occurence is found
// create a while loop that breaks once lowest index meets highest index
  // create a mid variable by adding the index's and dividing by 2
  // if current mid element is equal to our item we decrement down the array
  // if the current mid element is greater than the item
    // we reset our high index to the element before our mid element
  // if the current mid element is less than the item
    // we reset our low index to the element after our mid element
// return result at the end

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

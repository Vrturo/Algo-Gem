// Search in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.


// ex. input
// [2,3,4,1], 1

// output
// 3

/**
 * @param {array[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    var result = -1,
        pivot;
    for( var i = 0; i<=nums.length; i++ ){
        if(nums[i] > nums[i+1]){
            pivot = i+1;
            break;
        }
    }
    console.log(pivot, nums.length - pivot)
    var sorted = nums.splice(pivot);
    sorted = sorted.concat(nums);
    var low = 0,
        high = sorted.length -1,
        mid;
    while(low <= high){
        mid = Math.floor( (high+low)/2 );

        if(sorted[mid] === target){
            result = mid;
            break;
        } else if( target < sorted[mid] ){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if(pivot === undefined){
        return result;
    } else if(result === -1){
        return -1;
    } else {
        return result + pivot;
    }
};

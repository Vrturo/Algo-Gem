// Find Minimum in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// ex.
// Input:
// [ 4 5 6 7 0 1 2]
// [ 9 14 25 56 4 6 8 ]

// Output:
// 0
// 9

/**
 * @param {array[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    var lo=0,
        hi=nums.length-1,
        mid;
    while(lo<hi){// find the index of the smallest value using binary search.
                 // Loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
                // Proof by contradiction that mid < hi: if mid==hi, then lo==hi and loop would have been terminated.
        mid = Math.floor( (lo+hi)/2 );
        nums[mid] > nums[hi] ? lo=mid+1 : hi=mid;
    }
    return nums[lo];
};

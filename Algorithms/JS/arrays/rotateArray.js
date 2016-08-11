// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    var len = nums.length,
        diff = len - k;

    var extra = nums.splice(diff, len); // pull elements out to bring k element to the front
    for( var i = extra.length-1; i >= 0; i-- ){ // start from back of the array to push them in the right order
       nums.unshift( extra[i] ); // push to front of nums
    }
};

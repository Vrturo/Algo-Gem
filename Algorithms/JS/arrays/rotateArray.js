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

// -------------------------------------------------

// Time complexity : O(n). One pass is used to put the numbers in the new array.
                  // And another pass to copy the new array to the original one.

// Space complexity : O(n). Another array of the same size is used.
var rotate = function(nums, k) {
    var result = [],
        i;

    for( i=0; i<nums.length; i++ ){
            result[(i + k) % nums.length] = nums[i];
    }
    for( i=0; i<nums.length; i++ ){
        nums[i] = result[i];
    }
};

// ------------------------------------------------------

// Time complexity : O(n). nn elements are reversed a total of three times.
// Space complexity : O(1). No extra space is used.

var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    function reverse( nums, start, end ){
        while( start < end ){
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
};


// ------------------------------------
// BRUTE FORCE
// Time: O(n*k)  All the numbers are shifted by one step(O(n) k times(O(k)).
// Space: O(1)    No extra space is used.

var rotate = function(nums, k) {
    var temp, previous, i, j;

    for( i=0; i < k; i++ ){
        previous = nums[nums.length-1];
        for( j=0; j<nums.length; j++ ){
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
};

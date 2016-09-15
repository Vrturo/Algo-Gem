// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent,
// with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    var red = [],
        white = [],
        blue = [];
    for(var i=0; i<nums.length; i++ ){
        if( nums[i] === 1 ){
           white.push(nums[i]);
        } else if( nums[i] === 2 ){
            blue.push(nums[i]);
        } else{
            red.push(nums[i]);
        }
    }
    nums = red.concat( white, blue );
};

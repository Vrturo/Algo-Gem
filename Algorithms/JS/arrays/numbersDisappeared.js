// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// 1. [4,3,2,7,8,2,3,1]
// 2. [2, 2]
// 3. [1, 1]

// Output:
// 1. [5,6]
// 2. [1]
// 3. [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */


 // -------------- Naive
// create a result array to return missing numbers
// create a cache to check if a number has came up
// loop through nums
  // cache each number
// create a for loop the size of the array
  // if number hasnt been cached somewhere in bewteen
    // push into result
// return result that has missing numbers

var findDisappearedNumbers = function(nums) {
    var result = [],
        cache = {};
    for( var i=0; i<nums.length; i++ ){
        if(!cache[nums[i]]) cache[nums[i]] = true;
    }
    for( var j=1; j<=nums.length; j++ ){
        if(!cache[j]) result.push(j);
    }
    return result;
};



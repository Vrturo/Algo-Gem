// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */



// store and flip each number at position i-1 to negative.
// if the number at position i-1 is already negative, i is the number that occurs twice.

var findDuplicates = function(nums) { // 0(n) runtime - 0(1) space
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var index = Math.abs(nums[i])-1; // 1
        if (nums[index] < 0){ // if number is negative it's occured
            result.push(Math.abs(index+1)); // push regular value
        }
        nums[index] = -nums[index]; // set number as negative
    }
    return result;
};
var arr = [4,3,2,7,8,2,3,1]
console.log( findDuplicates(arr) );

// ------------------------------------------------

var findDuplicates = function(nums) {
    var result = [],
        storage = {};
    for( var i=0; i<nums.length; i++ ){
        if( !storage[nums[i]] ){ // check to see if number has passed
            storage[nums[i]] = true;
        } else {
            result.push( nums[i] ); // push into result if number existed
            delete storage[nums[i]]; // delete key/value because it can only occur 2 times max
        }
    }
    return result;
};

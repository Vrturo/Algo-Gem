// Given a sorted array of integers, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].


var searchRange = function(nums, target) {
    var result = [];
    if(nums[0] === undefined){
        return;
    }
    if(nums[0] === target){
        result.push(i);
    }
    nums = nums.splice(0, 1);
    searchRange(nums, target);
    if (result.length === 0){
        result = [-1, -1];
    }
    return result;
};

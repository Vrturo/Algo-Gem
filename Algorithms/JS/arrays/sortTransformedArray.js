// Given a sorted array of integers nums and integer values a, b and c.
// Apply a function of the form f(x) = ax2 + bx + c to each element x in the array.

// The returned array must be in sorted order.

// Expected time complexity: O(n)

// Example:
// nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5,

// Result: [3, 9, 15, 33]

// nums = [-4, -2, 2, 4], a = -1, b = 3, c = 5

// Result: [-23, -5, 1, 7]


/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */


var sortTransformedArray = function(nums, a, b, c) {
    var result = [];
    function helper( num ){
        num = a*num*num + b*num + c;
        return num;
    }
    for( var i =0; i<nums.length; i++ ){
        result.push( helper(nums[i]) );
    }
    result.sort(function (a, b) { return a - b; });
    return result;
};

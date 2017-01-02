// Minimum Moves to Equal Array Elements II

// Given a non-empty integer array, find the minimum number of moves required to make all array elements equal,
// where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

// You may assume the array's length is at most 10,000.

// Example:

// Input:
// [1,2,3]

// Output:
// 2

// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):

// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

/**
 * @param {array[]} nums
 * @return {number}
 */

var minMoves2 = function(nums) {
    if(nums ===null|| nums.length===0) return 0;
    var moves = Number.MAX_VALUE;
    nums.sort(function(a, b) {
        return a-b;
    });
    var totalSum = 0,
        sum = 0;
    for(var i =0;i<nums.length;i++){
        totalSum += nums[i];
    }
    for(i =0;i<nums.length;i++){
        var m = (i-(nums.length-i-1)-1)*nums[i]-sum+(totalSum-sum);
        moves = Math.min(m, moves);
        sum+=nums[i];
    }
    return moves;
};

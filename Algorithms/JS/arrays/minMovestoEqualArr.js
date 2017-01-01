// Minimum Moves to Equal Array Elements

// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal,
// where a move is incrementing n - 1 elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

/**
 * @param {array[]} nums
 * @return {number}
 */

// ---------- TIME LIMIT EXCEEDS OVER 9,999,999 STEPS

var minMoves = function(nums) {
    var incr = nums.length -2,
        index,
        steps = 0;

    function sameVals(arr){
        return arr.every(x => x === arr[0]);
    }
    while( !sameVals(nums) ){
        index = nums.indexOf( Math.min.apply(null, nums) );
        nums[index]++;
        steps++;
    }
    return steps;
};

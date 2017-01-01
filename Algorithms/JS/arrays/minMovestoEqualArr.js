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

// --------------------------------------------------

// Adding 1 to n - 1 elements is the same as subtracting 1 from one element, goal of making the elements in the array equal.
// So, best way to do this is make all the elements in the array equal to the min element.
// sum(array) - n * minimum

// create var steps to keep track of steps and return at the end
// create var min by grabbing the min val of array
// loop through nums
  // subtract the current value by the minimum value and add it to the steps var
// return steps

var minMoves = function(nums) {
    var steps = 0,
        min = Math.min(...nums);

    for(var i=0; i<nums.length; i++){
        steps+= nums[i] - min;
    }
    return steps;
};


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

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from
// robbing each of them is that adjacent houses have security system connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

// Input: Array
// ex. [5,2,3,6]
//     []
//     [1]

// Output: Integer

//     12
//     0
//     1

var rob = function(nums) { // 108 ms runtime
    if( nums.length < 1 ) return 0;
    if( nums.length === 1 ) return nums[0];
    nums[1] = Math.max( nums[0], nums[1] );

    for( var i = 2; i < nums.length; i++ ){
        nums[i] = Math.max( nums[i-2] + nums[i], nums[i - 1] );
    }
    return nums[nums.length - 1];
};

// ------------------------------------------------------------------

// Approach (Dynamic Programming)

// It could be overwhelming thinking of all possibilities on which houses to rob.

// A natural way to approach this problem is to work on the simplest case first.

// Let us denote that:

// f(k) = Largest amount that you can rob from the first k houses.
// Ai = Amount of money at the ith house.
// Let us look at the case n = 1, clearly f(1) = A1.

// Now, let us look at n = 2, which f(2) = max(A1, A2).

// For n = 3, you have basically the following two options:

// Rob the third house, and add its amount to the first house's amount.

// Do not rob the third house, and stick with the maximum amount of the first two houses.

// Clearly, you would want to choose the larger of the two options at each step.

// Therefore, we could summarize the formula as following:

// f(k) = max(f(k – 2) + Ak, f(k – 1))
// We choose the base case as f(–1) = f(0) = 0, which will greatly simplify our code as you can see.

// The answer will be calculated as f(n). We could use an array to store and calculate the result,
// but since at each step you only need the previous two maximum values, two variables are suffice.



var rob = function(nums) {
    var prevMax = 0,
        currMax = 0;
    for ( var i=0; i<nums.length; i++  ) {
        var temp = currMax;
        currMax = Math.max( prevMax + nums[i], currMax );
        prevMax = temp;
    }
    return currMax;
};

// --------------------------------------

var rob = function(nums) { // 128 ms runtime
    return nums.reduce(function(p, n) {
        return [p[1], Math.max(p[0] + n, p[1])];
    }, [0,0])[1];
};

// variable p records previous 2 max values: p[1] is the previous one and p[0] is the one before previous one.
// p is initialized as [0,0]. variable n is the value at each position.

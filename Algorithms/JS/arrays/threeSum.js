// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
// The solution set must not contain duplicate triplets.
//     For example, given array S = {-1 0 1 2 -1 -4},

//     A solution set is:
//     (-1, 0, 1)
//     (-1, -1, 2)

// BREAKDOWN PROBLEM

var threeSum = function(nums) {
    var result = [];
    if( nums.length < 3 ) return result;

    nums = nums.sort(function( a, b ) { // sort numbers in order
        return a - b;
    });
    for( var i = 0; i < nums.length - 2; i++ ){ // nums.length - 2 because adding j and k var to search array
        if( nums[i] > 0 ) return result
        if( i > 0 && nums[i] == nums[i - 1] ) continue; // both positive so sum isnt 0

        for( var j = i + 1, k = nums.length - 1; j < k; ){ // j is + 1 of i, k is at the end of the array
            if( nums[i] + nums[j] + nums[k] === 0 ){ // if all numbers add up to 0 push into result
                result.push( [ nums[i], nums[j], nums[k] ] );
                j++; // increment to finish loop
                k--; // decrement to finish loop
                while( j < k && nums[j] == nums[j - 1] ){ // if number is repetitive and sum still isnt zero move to next
                    j++;
                }
                while( j < k && nums[k] == nums[k + 1] ){ // if number is repetitive and sum still isnt zero move to next
                    k--;
                }
            } else if( nums[i] + nums[j] + nums[k] > 0 ){
                k--; // if sum is greater than 0, find lesser values in the array to decrement the sum
            } else {
                j++; // if sum is less than 0, find greater values in the array to increment the sum
            }
        }
    }
    return result;
};


// BREAKDOWN PROBLEM

var threeSum = function(nums) {
    nums = nums.sort(function(a, b) { return a - b; });

    var results = [];
    var i, j, k, n = nums.length;

    for (i = 0; i < n; ++i) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        for (j = i + 1; j < n; ++j) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;

            for (k = j + 1; k < n; ++k) {
                if (k > j + 1 && nums[k] === nums[k-1]) continue;

                if (nums[i] + nums[j] + nums[k] === 0) results.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return results;
};

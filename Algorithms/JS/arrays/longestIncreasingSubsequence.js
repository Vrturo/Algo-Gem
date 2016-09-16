// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.

// Note that there may be more than one LIS combination, it is only necessary for you to return the length.


var lengthOfLIS = function(nums) {
    if( nums.length < 1 ) return 0;
    var maxRef = 1;
    function lis( arr, n ){
        if( n === 1 ) return 1;
        var result,
            maxEnd = 1;
        for( var i=1; i<n; i++ ){
            result = lis(arr, i);
            if( arr[i-1] < arr[n-1] && result + 1 > maxEnd ) maxEnd = result +1;
        }
        if( maxRef < maxEnd ) maxRef = maxEnd;
        return maxEnd;
    }
    lis( nums, nums.length );
    return maxRef;
};

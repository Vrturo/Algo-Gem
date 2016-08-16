// Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its missing ranges.

// For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].


/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */


var findMissingRanges = function(nums, lower, upper) {
    var result = [],
        start = lower;

    for( var i=0; i<nums.length; i++ ){
       if( lower<= nums[i] && upper >= nums[i] ){
            if( start !== nums[i] ){
                result.push( getRange(start, nums[i]-1) );
            }
            start = nums[i] + 1;
       }
    }

    if( start <= upper ){
        result.push( getRange(start,upper) );
    }

    return result;
};

function getRange( start, end ){
    return start === end ? start.toString() : [start,end].join('->');
}

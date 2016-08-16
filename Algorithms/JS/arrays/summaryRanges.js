// Given a sorted integer array without duplicates, return the summary of its ranges.

// For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].


var summaryRanges = function(nums){
    var result = [],
        start = nums[0],
        lower,
        i;

    for( i=1; i<=nums.length; i++ ){
       // 0, 1, 2, 5, 7
       lower = nums[i-1]; // 2

       if( lower+1 !== nums[i] ){ // 2+1 !== 5
            result.push( getRange(start, lower) ); // 0 -> 2
            start = nums[i]; // 5
        }
    }
    return result;
};
function getRange( start, end ){
    return start === end ? start.toString() : [start,end].join('->');
}

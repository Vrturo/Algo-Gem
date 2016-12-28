// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
// Given [1,1,1,2,2,3] and k = 1, return [1].

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    var map = {},
        result;

    for(var i=0; i<nums.length; i++){
        if( map[nums[i]] ){
            map[nums[i]]+=1;
        } else {
            map[nums[i]] = 1;
        }
    }
    result = Object.keys(map).sort( function(a,b){ return map[b] - map[a]});
    result = result.map(Number);
    return result.splice(0, k);
};

// Kth Largest Element in an Array

// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order,
// not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

/**
 * @param {arr[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthLargest = function(nums, k) {
    var pivot = nums[nums.length-1],
        greater = [],
        lesser = [],
        buildUp = [];

    for(var i=0; i<nums.length; i++){
        if( pivot<nums[i] ){
            greater.push( nums[i] );
        } else {
            lesser.push( nums[i] );
        }
    }

    var potential = nums.length - greater.length;
    if(k === potential) return pivot;

    if( potential > k ){
        greater.push(pivot);
        buildUp.concat(lesser);
        helper(buildUp);
    } else {
        lesser.push(pivot);
        buildUp.concat(greater);
        helper(buildUp);
    }

    function helper(arr){
        var pivot = arr[arr.length-1],
            lesser=[],
            greater=[];
        for(var i=0; i<arr.length; i++){
            if( pivot<arr[i] ){
                greater.push( arr[i] );
            } else {
                lesser.push( arr[i] );
            }
        }
        var potential = nums.length - arr.length;
        if(k === potential) return pivot;

        if( potential > k ){
            greater.push(pivot);
            buildUp.concat(lesser);
            helper(buildUp);
        } else {
            lesser.push(pivot);
            buildUp.concat(greater);
            helper(buildUp);
        }

    }

};

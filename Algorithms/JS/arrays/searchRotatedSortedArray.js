// Search in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.


// ex. input
// [2,3,4,1], 1

// output
// 3

/**
 * @param {array[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    var low = 0,
        high = nums.length-1,
        mid;

    while( low<= high ){
        if( nums[low] <= nums[high] ) return low; // means it is sorted
        mid = Math.floor( (high+low)/2 );
        var next = (mid+1) % target,
            prev = (mid+target-1) % target;
        if( nums[mid] <= nums[next] && nums[mid] <= nums[prev] ) {
          return mid
        } else if( nums[mid] <= nums[low] ){
          high = mid-1;
        } else if( nums[mid] >= nums[low] ){
          low = mid+1;
        }
    }
    return -1;
}
var test = [2,3,4,1]
console.log( search(test, 1))
// ---------------------------------------------------------------


var search = function(nums, target) {
    var lo=0,
        len = nums.length,
        hi=len-1,
        mid;
    while(lo<hi){
        mid = Math.floor( (lo+hi)/2 );
        nums[mid] > nums[hi] ? lo=mid+1 : hi=mid;
    }
    var rot=lo,
        result;
    lo=0;
    hi=len-1;
    while( lo<=hi ){
        mid=Math.floor( (lo+hi)/2 );
        result= (mid+rot) % len;
        if(nums[result] === target) return result;
        nums[result]<target ? lo=mid+1 : hi=mid-1;
    }
    return -1;
};

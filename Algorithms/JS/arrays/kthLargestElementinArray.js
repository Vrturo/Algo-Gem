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
        k = nums.length - k;
        var lo = 0,
            hi = nums.length - 1;

        while (lo < hi) {
            var j = partition(nums, lo, hi);
            if(j < k) {
                lo = j + 1;
            } else if (j > k) {
                hi = j - 1;
            } else {
                break;
            }
        }
        return nums[k];

    function partition(a, lo, hi) {
        var i = lo,
            j = hi + 1;
        while(true) {
            while(i < hi && a[++i] < a[lo]);
            while(j > lo && a[lo] < a[--j]);
            if(i >= j) break;
            swap(a, i, j);
        }
        swap(a, lo, j);
        return j;
    }

    function swap(a, i, j) {
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

};

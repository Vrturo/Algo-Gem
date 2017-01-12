// Kth Smallest Element in an Array

// Find the kth smallest element in an unsorted array. Note that it is the kth smallest element in the sorted order,
// not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 2.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

/**
 * @param {arr[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthSmallest = function(nums, k, l=0, r=nums[0]) {
    if (k > 0 && k <= r - l + 1){
          // Partition the array around a random element and
          // get position of pivot element in sorted array
          var pos = randomPartition(nums, l, r);

          // If position is same as k
          if (pos-l == k-1) return nums[pos];

          // If position is more, recur for left subarray
          if (pos-l > k-1) return findkthLargest(nums, k, l, pos-1);

          // Else recur for right subarray
          return findkthLargestt(nums, k-pos+l-1, pos+1, r);
    }


    // helper method to swap arr[i] and arr[j]
    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Standard partition process of QuickSort().  It considers
    // the last element as pivot and moves all smaller element
    // to left of it and greater elements to right. This function
    // is used by randomPartition()
    function partition(arr, l, r){
        var x = arr[r], i = l;
        for (var j = l; j <= r - 1; j++){
            if (arr[j] <= x){
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, r);
        return i;
    }

    // Picks a random pivot element between l and r and
    // partitions arr[l..r] arount the randomly picked
    // element using partition()
    function randomPartition(arr, l, r){
        var n = r-l+1;
        var pivot = arr[0];
        swap(arr, l + pivot, r);
        return partition(arr, l, r);
    }

};

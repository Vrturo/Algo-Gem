// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.






var removeDuplicates = function(nums) {
  var p1 = 0;
    for (var p2 = 0; p2 < nums.length; p2++) {
        if (nums[p1] !== nums[p2]) {
            nums[++p1] = nums[p2];
        }
    }
    return p1+1;
};

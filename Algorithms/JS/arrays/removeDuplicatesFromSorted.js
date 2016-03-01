// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.




// set two pointers
  // one that starts at 0
  // second that is the index

// loop through the array
  // if pointer 1 isnt equal to pointer 2 value
    // increment p1 and set p2 to incremented value to jump over duplicate

// return p1 plus 1 for length

var removeDuplicates = function(nums) {
  var p1 = 0;
    for (var p2 = 0; p2 < nums.length; p2++) {
        if (nums[p1] !== nums[p2]) {
            nums[++p1] = nums[p2];
        }
    }
    return p1+1;
};

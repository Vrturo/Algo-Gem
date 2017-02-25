// NEXT GREATER ELEMENT III

// Given an array, find the next greater element G[i] for every element A[i] in the array.
// The Next greater Element for an element A[i] is the first greater element on the right side of A[i] in array.
// More formally,

// G[i] for an element A[i] = an element A[j] such that
//     j is minimum possible AND
//     j > i AND
//     A[j] > A[i]
// Elements for which no greater element exist, consider next greater element as -1.

// Example:

// Input : A : [4, 5, 2, 10]
// Output : [5, 10, 10, -1]

// Example 2:

// Input : A : [3, 2, 1]
// Output : [-1, -1, -1]


// create an empty array that sets the default value as -1 incase no element is larger
// loop through the arr and only check the elements to the right
  // keep checking elements if they are greater
    // if an element is greater set is as the next element in next array
    // make sure to break array because next greater element is found
// return final next array at the end

const nextGreater = function nG(nums) {
  const next = [];
  for (let i = 0; i < nums.length; i += 1) {
    next[i] = -1;
  }
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] > nums[i]) {
        next[i] = nums[j];
        break;
      }
    }
  }
  return next;
}

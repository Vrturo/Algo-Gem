// Sliding Window Maximum

// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.

// For example,
// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Therefore, return the max sliding window as [3,3,5,5,6,7].

// Note:
// You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?

/**
 * @param {array[]} nums
 * @param {number} k
 * @return {array[]}
 */

// first attempt / naive solution

// if nums is empty return an empty array
// if sliding window is 0
  // return the first element twice and the rest of the array
// create result variable to store max in order
// create a loop that is the size of our array minus the size of the sliding door
  // for every iteration we only look at the k amount of elements - nums.slice(i, i + k)
  // each iteration we look for the max - Math.max.apply(null, nums.slice(i, i + k)), and push the max element into the result array and check the next set
// at the end return elements we pushed into result array

const maxSlidingWindow = function msw(nums, k) {
  if (nums.length < 1) return nums;
  if (k === 0) return [nums[0]].concat(nums);
  const stack = [];
  for (let i = 0; i <= nums.length - k; i += 1) {
    stack.push(Math.max.apply(null, nums.slice(i, i + k)));
  }
  return stack;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

// #

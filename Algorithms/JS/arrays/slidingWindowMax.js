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

// first attempt


const maxSlidingWindow = function msw(nums, k) {
  if (nums.length < 1) return nums;
  if (k === 0) return [nums[0]].concat(nums);
  const result = [];
  for (let i = 0; i <= nums.length - k; i += 1) {
    result.push(Math.max.apply(null, nums.slice(i, i + k)));
  }
  return result;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

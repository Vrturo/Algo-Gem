// Container with most water

// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */

const getMaxArea = function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    max = Math.max(max, ((r - l) * Math.min(height[l], height[r])));
    height[l] < height[r] ? l += 1 : r -= 1;
  }
  return max;
};

console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

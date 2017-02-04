Container with most water

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    var l = 0,
        r = height.length - 1,
        maxArea = 0;
    while (l < r) {
        maxArea = Math.max(maxArea, ((r-l)*Math.min(height[l], height[r])));
        height[l] < height[r] ? l += 1 : r -= 1;
    }
    return maxArea;
};

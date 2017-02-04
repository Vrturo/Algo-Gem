// Container with most water

// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Example

// Input

// 1 8 6 2 5 4 8 3 7
                                    // iteration                     // iteration                       // iteration

//   1 2 3 4 5 6 7 8 9              //   1 2 3 4 5 6 7 8 9           //   1 2 3 4 5 6 7 8 9             //  1 2 3 4 5 6 7 8 9
// 1 x                              // 1 x                           // 1                               // 1
// 8 x x x x x x x x                // 8 o                           // 8 x x x x x x x x               // 8 x x x x x x x x
// 6 x x x x x x                    // 6 o                           // 6 o o o o o o o                 // 6 o o o
// 2 x x                            // 2 o                           // 2 o o o o o o o                 // 2 o o o
// 5 x x x x x                      // 5 o                           // 5 o o o o o o o                 // 5 o o o
// 4 x x x x                        // 4 o                           // 4 o o o o o o o                 // 4 o o o
// 8 x x x x x x x x                // 8 o                           // 8 o o o o o o o                 // 8 o o o
// 3 x x x                          // 3 o                           // 3 o o o o o o o                 // 3 x x x
// 7 x x x x x x x                  // 7 x x x x x x x               // 7 x x x x x x x                 // 7

                                    // returns 8                     // returns 49                      // returns 18


// Output
// 49

/**
 * @param {number[]} height
 * @return {number}
 */

// Logic

// We have to maximize the area that can be formed between the vertical lines using the shorter line as
// length and the distance between the lines as the width of the rectangle forming the area.

// We need to take min(height[l], height[r]) as our height.
// Thus if height[l] < height[r], then the expression Math.min(height[l],height[r]) will always lead to at maximum height[l] for all other r(l being fixed),
// hence no point checking them. Similarly when height[l] > height[r] then all the other l's can be ignored for that particular r.



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

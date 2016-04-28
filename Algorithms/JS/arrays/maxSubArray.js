// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.


var maxSubArray = function(nums) {
  var max = nums[0],
      sum = 0;
  nums.forEach((e, i) => {
    sum += e;
    if (sum > max)
      max = sum;
    if (sum < 0)
      sum = 0;
  });
  return max;
};

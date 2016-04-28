// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

// set variable max as the first subset of nums array
// set sum to 0
// loop through nums with a for each loop
  // set or add sum to the first element
  // if sum is greater than max set it
  // if sum is less than 0 set to 0
// return max


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

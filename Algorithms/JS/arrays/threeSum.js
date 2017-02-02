// 3 sum

// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
// Return the sum of the three integers.

// Assume that there will only be one solution

// Example:
// given array S = {-1 2 1 -4},
// and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

/**
 * @param {arr[]} nums
 * @param {number} target
 * @return {number}
 */

function threeSumClosest(A, B) {
  const map = {};
  let sum;

  for (let i = 0; i < A.length; i += 1) {
    for (let j = i + 1; j < A.length; j += 1) {
      for (let k = j + 1; k < A.length; k += 1) {
        sum = A[i] + A[j] + A[k];
        if (sum === B) return B;
        if (map[sum] === undefined) {
          map[sum] = sum;
        } else {
          continue;
        }
      }
    }
  }
  const sumArr = Object.keys(map);
  return sumArr.reduce((prev, curr) => {
    return Math.abs(curr - B) < Math.abs(prev - B) ? curr : prev;
  });
}
console.log(threeSumClosest([2, 1, -9, -7, -8, 2, -8, 2, 3, -8], -1));

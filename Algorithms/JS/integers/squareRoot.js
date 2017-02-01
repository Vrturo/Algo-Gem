// Sqrt(x)

// Implement int sqrt(int x).

// Compute and return the square root of x.

/**
 * @param {number} x
 * @return {number}
 */


// if integer given is 0, return 0
// create a range from 1 - Max integer
// create a loop that will break once we find sqrt
  // reset mid to the difference of highest and lowest integer divided by, plus lowest integer
  // if our given integer divided by 2 is less than our mid
    // set our highest index to one less than mid
  // else
    // if mid plus 1 is greater than our given integer divided by mid plus 1
      // we found our sqrt
    // if we didnt find our sqrt
      // set our left to mid plus 1

const sqrt = function mySqrt(x) { // Binary Search approach
  if (x === 0) return 0;
  let left = 1;
  let right = Number.MAX_VALUE;
  let mid;
  while (true) {
    mid = left + ((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) return mid;
      left = mid + 1;
    }
  }
};

console.log(sqrt(5));

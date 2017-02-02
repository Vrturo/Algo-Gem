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

function threeSumClosest(A, B){
  var map = {},
          sum;

  for( var i = 0; i < A.length; i++ ){

      for( var j=i+1; j<A.length; j += 1){

          for(var k=j+1; k<A.length; k += 1){
              sum = A[i] + A[j] + A[k]
              if(sum === B) return B;
              if(map[sum] === undefined) {
                  map[sum] = sum;

              } else {
                  continue;
              };
          }

      }

  }
  var sumArr = Object.keys(map);
  var closest = sumArr.reduce(function (prev, curr) {
    return (Math.abs(curr - B) < Math.abs(prev - B) ? curr : prev);
  });
  return closest

}
console.log(threeSumClosest([2, 1, -9, -7, -8, 2, -8, 2, 3, -8 ], -1))

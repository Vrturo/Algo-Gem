// Provide a function to find the closest two points among a set of given points in two dimensions

// We are given an array of n points in the plane, and the problem is to find out the closest pair of points in the array.
// This problem arises in a number of applications.
// For example, in air-traffic control, you may want to monitor planes that come too close together,
// since this may indicate a possible collision. Recall the following formula for distance between two points p and q.

// Input: An array of n points P[]
// Output: The smallest distance between two points in the given array.


function closetPairs (arr) {
    var result = [],
        minDiff = Number.MAX_VALUE;

    // sort the given array
    var sortedArr = arr.sort(function(a, b) {
      return a - b;
    });

    // find the lowest difference for a pair of elements in the sorted array
    for (var i = 0; i < sortedArr.length - 1; i++) {
        var currDiff = sortedArr[i + 1] - sortedArr[i];
        if (currDiff < minDiff) {
          minDiff = currDiff;
        }
    }

    // find all the pairs with lowest differnece
    for (var j = 0; j < sortedArr.length - 1; j++) {
      var sortedEleDiff = sortedArr[j + 1] - sortedArr[j];
        if (minDiff == sortedEleDiff) {
            result.push(sortedArr[j + 1], sortedArr[j]);
        }
    }

    var sortedResult = result.sort(function (a, b) {
        return a - b;
    });

    return sortedResult;
}

var inputArr = [-20, -3910, -357, -3620, 7374, -7330, 30, 6246, -646, 266, -510, -460 ];

console.log(closetPairs(inputArr)); // [-510, -460, -20, 30]

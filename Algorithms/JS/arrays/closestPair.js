// Provide a function to find the closest two points among a set of given points in two dimensions

// We are given an array of n points in the plane, and the problem is to find out the closest pair of points in the array.
// This problem arises in a number of applications.
// For example, in air-traffic control, you may want to monitor planes that come too close together,
// since this may indicate a possible collision. Recall the following formula for distance between two points p and q.

// Input: An array of n points P[]
// Output: The smallest distance between two points in the given array.

var Point = function(x, y) {
  this.x = x;
  this.y = y;
  Point.distance = function(a, b) {
    // euclidean distance between two points
    return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y));
  }
}

// divide and conquer algorithm
function closestPairOfPointsDivideAndConquer( points ){

  // compare two points
  function comparePoints( a, b ){
    if( a.x < b.x ){
      return -1;
    } else if ( a.x > b.x ) {
      return 1;
    } else if ( a.y < b.y ) {
      return -1;
    } else if ( a.y > b.y ) {
      return 1;
    } else {
      return 0;
    }
  }

  // sort the points by the x coordinate
  points.sort(comparePoints);

  // solve recursively
  function solve(points) {

    // brute force for 3 points or less
    if ( points.length >= 2 && points.length <= 3 ) {
      return closestPairOfPointsBruteForce(points);
    }

    var int = parseInt,
        n   = points.length;

    // split
    var middle = int(n/2),
        left   = points.slice(0, middle),
        right  = points.slice(middle, n);

    // branch
    var  leftMinDistance = solve(left),
        rightMinDistance = solve(right);

    var minDistance = Math.min(leftMinDistance, rightMinDistance);

    // middle line
    var middleX = (points[middle - 1].x + points[middle].x)/2;

    // searching area
    var  leftLimitX = middleX - minDistance,
        rightLimitX = middleX + minDistance;

    var  leftLimitPoints = [];
    var rightLimitPoints = [];

    for ( var i = left.length - 1; i >= 0; --i ) {
      if ( left[i].x >= leftLimitX ) {
        leftLimitPoints.push(left[i])
      } else {
        break;
      }
    }

    for ( var i = 0; i < right.length; ++i ) {
      if ( right[i].x <= rightLimitX)  {
        rightLimitPoints.push( right[i] );
      } else {
        break;
      }
    }

    var cnt = 0;
    for ( var i = 0; i < leftLimitPoints.length; ++i ) {
      for ( var j = 0; j < rightLimitPoints.length; ++j ) {
        minDistance = Math.min(minDistance, Point.distance( leftLimitPoints[i], rightLimitPoints[j]) );
        cnt++;
      }
    }

    return minDistance;

  }

  return solve(points);
}

// --------------------------------------------------------------


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
        if (minDiff === sortedEleDiff) {
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

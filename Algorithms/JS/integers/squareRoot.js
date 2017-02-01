Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x.

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x === 0) return 0;
    var left = 1,
        right = Number.MAX_VALUE;
    while (true) {
        var mid = left + (right - left)/2;
        if (mid > x/mid) {
            right = mid - 1;
        } else {
            if (mid + 1 > x/(mid + 1)) return mid;
            left = mid + 1;
        }
    }
};

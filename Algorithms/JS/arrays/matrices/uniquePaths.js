// A robot is located at the top-left corner of a m x n grid.

// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid.

// How many possible unique paths are there?

// Note: m and n will be at most 100.


// Input: Integer, Integer
// ex. 2, 3
// ex. 3, 3

// Output: Integer
// ex. 3
// ex. 6


var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;

    var dp = [];
    for (var i = 0; i < n; i++) {
        dp[i] = 1;
    }
    for (i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
};

// --------------------------------------------


var uniquePaths = function(m, n) {
    var map = [];
    for(var i = 0; i < m; i++) {
        map[i] = [];
        for (var j = 0; j < n; j++) {
            map[i][j] = 0;
        }
    }
    for(i = 0; i<m; i++){ // When (n===0||m===0) the function always returns 1 since the robot can't go left or up.
        map[i][0] = 1;
    }
    for(j= 0; j<n; j++){ // Populate the edges with 1 first and use DP to get the full 2-D array.
        map[0][j] = 1;
    }
    for(i = 1; i<m; i++){
        for(j = 1; j<n; j++){
            map[i][j] = map[i-1][j]+map[i][j-1]; // For all other cells. The result = uniquePaths(m-1,n)+uniquePaths(m,n-1)
        }
    }
    return map[m-1][n-1];
};

// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2.
// (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character



var minDistance = function(word1, word2) {
    var m = word1.length,
        n = word2.length,
        result = [];

    for( var i=0; i<=m+1; i++ ){ // populate array
        result.push([]);
        for( var j=0; j<=n+1; j++ ){
            result[i][j] = 0;
        }
    }
    for( i=0; i<=m; i++ ){
        for( j=0; j<=n; j++ ){
            if( i===0 ){
                result[i][j] = j;
            } else if( j===0 ){
                result[i][j] = i;
            } else if( word1.charAt(i-1) === word2.charAt(j-1) ){
                result[i][j] = result[i-1][j-1];
            } else{
                result[i][j] = 1 + Math.min(result[i][j-1],
                                            result[i-1][j],
                                            result[i-1][j-1]);
            }
        }
    }
    return result[m][n];
};

// ------------------------------------------------------------
// 0(3^m)
var minDistance = function(word1, word2, m=word1.length, n=word2.length) {
    // If first or second string string is empty, the only option is to
    // insert all characters of full string into empty
    if (m === 0) return n;
    if (n === 0) return m;
    // If last characters of two strings are same, nothing much to do.
    // Ignore last characters and get count for remaining strings.
    if ( word1.charAt(m-1) === word2.charAt(n-1) ) return minDistance(word1, word2, m-1, n-1);

    // If last characters are not same, consider all three operations on last character of first string,
    // recursively compute minimum cost for all three operations and take minimum of three values.
    return 1 + Math.min( minDistance(word1,  word2, m, n-1),    // Insert
                         minDistance(word1,  word2, m-1, n),    // Remove
                         minDistance(word1,  word2, m-1, n-1)   // Replace
                        );

};

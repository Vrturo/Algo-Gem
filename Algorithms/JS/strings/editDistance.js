// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2.
// (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character


var minDistance = function(word1, word2, m=word1.length, n=word2.length) {
    if (m === 0) return n;
    if (n === 0) return m;
    if ( word1.charAt(m-1) === word2.charAt(n-1) ) return minDistance(word1, word2, m-1, n-1);

    return 1 + Math.min( minDistance(word1,  word2, m, n-1),    // Insert
                     minDistance(word1,  word2, m-1, n),        // Remove
                     minDistance(word1,  word2, m-1, n-1)       // Replace
                   );

};

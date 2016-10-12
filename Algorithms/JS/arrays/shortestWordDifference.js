// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */


var shortestDistance = function(words, word1, word2) { // 92 ms runtime
    var distance = Number.MAX_VALUE, // start distance at highest possible so we can set minimum faster
        w1, w2; // set pointers
    for( var i=0; i<words.length; i++ ){
        if( words[i] === word1 ) w1 = i; // once word is found store index
        if( words[i] === word2 ) w2 = i; // once word is found store index

        // once both words have been found we can start checking the minimum distance from the index's
        if( w1 !== undefined && w2 !== undefined) distance = Math.min( distance, Math.abs(w1 - w2) );
    }
   return distance;
};

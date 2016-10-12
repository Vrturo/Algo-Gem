// This is a follow up of Shortest Word Distance.
// The only difference is now you are given the list of words
// and your method will be called repeatedly many times with different parameters. How would you optimize it?

// Design a class which receives a list of words in the constructor,
// and implements a method that takes two words word1 and word2 and
// return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.


/**
 * @constructor
 * @param {string[]} words
 */

var WordDistance = function(words) {
    this.lib = {};
    for( var i=0; i<words.length; i++ ){
        if( this.lib[words[i]] ){
            this.lib[words[i]].push(i);
        } else {
            this.lib[words[i]] = [i];
        }
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */

WordDistance.prototype.shortest = function(word1, word2) {
    var distance = Number.MAX_VALUE,
        arr1 = this.lib[word1],
        arr2 = this.lib[word2];
    for( var i=0, j=0; i < arr1.length && j < arr2.length; ){
        if( arr1[i] < arr2[j] ){
            distance = Math.min( distance, arr2[j]-arr1[i] );
            i++;
        } else {
            distance = Math.min( distance, arr1[i]-arr2[j] );
            j++;
        }
    }
    return distance;
};


/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */

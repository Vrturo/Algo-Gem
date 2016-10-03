// Given a list of unique words.
// Find all pairs of distinct indices (i, j) in the given list,
// so that the concatenation of the two words,
// i.e. words[i] + words[j] is a palindrome.

// Example 1:
// Given words = ["bat", "tab", "cat"]
// Return [[0, 1], [1, 0]]
// The palindromes are ["battab", "tabbat"]

// Example 2:
// Given words = ["abcd", "dcba", "lls", "s", "sssll"]
// Return [[0, 1], [1, 0], [3, 2], [2, 4]]
// The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]

/**
 * @param {string[]} words
 * @return {number[][]}
 */

var palindromePairs = function(words, index=0, results=[]) {

    // Recurse through words checking each pair
    if( index > words.length ){ // if index gets bigger than length of words arr return results
        return results;
    } else {
        for( var i=0; i<words.length; i++ ){
            if( index === i ) continue; // skip current word we're checking
            // if any combo's, starting with the current words[index], are palindrome push into result
            if( palindromeCheck(words[index]+words[i]) ) results.push( [index, i] );
        }
        return palindromePairs( words, index+=1, results );
    }
    function palindromeCheck( str ){ // palindrome check
        var re = /[\W_]/g,
        lowRegStr = str.toLowerCase().replace(re, ''),
        reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }

};

// ------------------------------------------------------------


 // ------------NOT DONE---------
var palindromePairs = function(words) {
    var trie = {},
        results = [];

    for( var i=0; i<words.length; i++ ){ //set a trie
        var current = trie;
        for( var j=words[i].length-1; j>=0; j-- ){
            if( current[words[i][j]] === undefined ) { // if letter doesnt exist in hash
                current[words[i][j]] = {};
            }
            current = current[words[i][j]];
        }
        current.$ = i;
    }

    for( a=0; a<words.length; a++ ){
        for( b=0; b<words[a].length; ){
            if( trie[words[a][b]] ) { // b
                check( trie[words[a][b]], a, 1, words[a] );
            }
        }
    }
    function check( trie, i, count, word){
        if( trie )
           if( trie.$ ) results.push( [i, trie.$] );
           console.log(results)
           console.log( trie, i, count+1, word );
           check( trie[word[count]], i, count+1, word );
    }

    return results;
};
// map['bat'][1]

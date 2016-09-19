// Given a string s and a dictionary of words dict,
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */


var wordBreak = function(s, wordDict) {
    var map = [];

    for ( var i = 0; i < s.length; i++ ){
        for ( var j = 0; j <= i; j ++ ) {
            var word = s.slice( j, i + 1 );
            if( wordDict.has(word) && ( j === 0 || map[j-1] === true ) ) {
                map[i] = true;
            }
        }
    }

    return map[s.length - 1] || false;
};

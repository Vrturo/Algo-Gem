// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */


var firstUniqChar = function(s) {
    var map = {};
    for( var i=0; i<s.length; i++ ){
        if( map[ s[i] ] ){
            map[ s[i] ][1]+=1;
        } else{
            map[ s[i] ] = [i,1];
        }
    }

    for( var k in map ){
        if( map[k][1] === 1 ) return map[k][0];
    }
    return -1;
};

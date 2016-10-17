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


var firstUniqChar = function(s) { // 139 ms runtime
    var map = {};
    for( var i=0; i<s.length; i++ ){
        if( map[ s[i] ] === undefined ){ // if letter hasn't been encountered
            map[ s[i] ] = [i,1]; // set string letter as key and value as tuple of the index and letter count
        } else{
            map[ s[i] ][1] += 1; // increment the second element in tuple which is letter count
        }
    }

    for( var k in map ){ // loop through hash
        if( map[k][1] === 1 ) return map[k][0]; // if a character count is equal to 1 it is the first unique, so return
    }
    return -1; // return -1 if we didnt find a unique in our map
};

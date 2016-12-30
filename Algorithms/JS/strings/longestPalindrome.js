// Longest Palindrome

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */

 // ------------------------------------------------------

 var longestPalindrome = function(s) {
    var map = {},
        count = 0;

    for(var i=0; i<s.length; i++){
        if( map[s[i]] ){
            delete map[s[i]];
            count++;
        } else {
            map[s[i]] = true;
        }
    }
    return Object.keys(map).length === 0 ? count*2 : count*2+1;
};



 // ---------- DOES NOT PASS ALL EDGE CASES

var longestPalindrome = function(s) {
    var map = {},
        result = 0,
        max = 0;
    for(var i=0; i<s.length; i++){
        if( map[s[i]] ){
            map[s[i]]+=1;
        } else {
            map[s[i]] = 1;
        }
    }
    for(var k in map){
        if( map[k] % 2 === 0 ){
            result += map[k];
        } else {
            if( max < map[k] ) max = map[k];
        }
    }
    return result + max;
};

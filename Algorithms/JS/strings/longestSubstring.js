// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    if( s === "" ) return 0;
    var maxLen = 0,
        l,
        r;

    for ( l = 0, r = 1; r < s.length; r++ ) {
        var i = s.lastIndexOf( s[r], r-1 );
        if ( i >= 0 ) {
            maxLen = Math.max( maxLen, r - l );
            l = Math.max( l, i + 1 );
        }
    }
    return Math.max( maxLen, r - l );
};

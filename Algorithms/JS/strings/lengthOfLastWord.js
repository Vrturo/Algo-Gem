// Length of Last Word

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example,
// Given s = "Hello World",
// return 5.

/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLastWord = function(s) {
    for( var i = s.length-1, count=0; i >= 0; i--){
        if (s[i] === " " && count >= 1) return count;
        if (s[i] !== " ") count+=1;
    }
    return count;
};

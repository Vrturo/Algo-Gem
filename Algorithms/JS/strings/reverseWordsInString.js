// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".


var reverseWords = function(str) { // 88ms runtime
    var strArr = str.split(' '),
        result = '';

    for ( i = strArr.length-1; i>=0 ; i-- ){
        if  ( strArr[i] !== '' ) result += strArr[i] + ' '; // if word exists add the word plus space to result str
    }

    return result.trimRight(); // removes whitespace coming from the right
};

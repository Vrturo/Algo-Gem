// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

// The input string does not contain leading or trailing spaces and the words are always separated by a single space.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

// Do it in-place without allocating extra space?

var reverseWords = function(str) {
    reverse(str, 0, str.length - 1);
    var start = 0,
        end = -1;

    for( var i = 0; i < str.length; i++ ){
        if( str[i] == ' ' ) {
            reverse( str, start, i-1 );
            start = i + 1;
        }
    }
    reverse( str, start, str.length - 1 );
};

function reverse(string, start, end){
    while (start < end) {
        var temp = string[start];
        string[start] = string[end];
        string[end] = temp;
        start++;
        end--;
    }
}

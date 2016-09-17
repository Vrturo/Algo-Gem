// Given two sequences, find the length of longest subsequence present in both of them.
// A subsequence is a sequence that appears in the same relative order,
// but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”.

// So a string of length n has 2^n different possible subsequences.

// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.


function lengthOfLCS( a, b ){
    var lcs = new Array(a.length);

     for( var i=0; i<a.length; i++ ){ //populate n-sized Array
            lcs[i] = 1;
    }
    for( i=0; i<a.length; i++ ){
        for( j=0; j<b.length; j++ ){
            if( a[i] === b[j] && lcs[i] < lcs[j] +1 ) lcs[i] = lcs[j] +1;
        }
    }
    console.log(lcs)
};

var one = 'abcdgh';
var two = 'aedfhr';
lengthOfLCS(one, two)


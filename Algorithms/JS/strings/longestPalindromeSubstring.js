// Given a string S, find the longest palindromic substring in S.
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

var longestPalindrome = function(s) {
  var max = '',
      i, j;

  for( i = 0; i < s.length; i++ ){
    for( j = 0; j < 2; j++ ){ // l: 0 r: 0, l: 0 r: 1, l: 1 r: 1
      var left = i;
      var right = i + j;
      while( s[left] && s[left] === s[right] ){ //??
        left--;
        right++;
      }
      if( (right - left - 1) > max.length ) max = s.substring(left + 1, right);
    }// j
  } // i
  return max;
};

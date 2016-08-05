// Given a string S, find the longest palindromic substring in S.
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.



var longestPalindrome = function(s) { // 168ms runtime
  var len = s.length,
      result = "";
  if( len < 2 ) return s;

  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < len && s[left] === s[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  for (var i = 0; i < len - 1; i++) { // loop through string
    var oddPal = centeredPalindrome(i, i + 1), // allow one char to be odd
        evenPal = centeredPalindrome(i, i); // reg palindrome check

    if (oddPal.length > result.length) result = oddPal;
    if (evenPal.length > result.length) result = evenPal;
  }
  return result;
};

// ------------------------------------------------------


var longestPalindrome = function(s) { // 488ms runtime
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

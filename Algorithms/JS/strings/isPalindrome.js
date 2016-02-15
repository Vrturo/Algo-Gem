// Given an input string, determine whether any anagram of the string is a palindrome

function isPalindrome(str){
  var len = str.length;
  for(var i = 0; i < len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

function isPalindrome(str) {
    var revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    if (str === revStr) {
      return true
    }
    else {
      return false
    }
}

//  palindrome, considering only alphanumeric characters and ignoring cases.
var isPalindrome = function(str) {
  var s = str.toUpperCase().replace(/[\W_]+/g,"");
  var len = s.length;
  for(var i = 0; i < len/2; i++){
    if (s[i]!== s[len -1 -i])
       return false;
  }
  return true;
};

var isPalindrome = function(str) {
  var s = str.toUpperCase().replace(/[\W_]+/g,"");
  var len = s.length;
  var counter = 0;
      for(var i = len - 1; i > len/2; i--){
          if (s[i]!== s[counter])
               return false;
          counter++;
       }
  return true;
};

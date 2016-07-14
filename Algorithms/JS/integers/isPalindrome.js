// Given an input integer, determine whether any anagram of the integer is a palindrome

// input

// 99

// output

// true


function isPalindrome(num){
  var numArr = num.toString().split(""),
      len = numArr.length;

  for(var i = 0; i < Math.floor(len/2); i++){
    if ( numArr[i] !== numArr[len -1 -i] )
       return false;
  }

  return true;
}

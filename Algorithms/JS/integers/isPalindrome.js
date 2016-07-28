// Given an input integer, determine whether any anagram of the integer is a palindrome

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer",
// you know that the reversed integer might overflow. How would you handle such case?

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



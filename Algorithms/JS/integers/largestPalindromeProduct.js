// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindrome(num){
  var numArr = num.toString().split(""),
      len = numArr.length;

  for(var i = 0; i < Math.floor(len/2); i++){
    if ( numArr[i] !== numArr[len -1 -i] )
       return false;
  }

  return true;
}

console.log( isPalindrome(969) )

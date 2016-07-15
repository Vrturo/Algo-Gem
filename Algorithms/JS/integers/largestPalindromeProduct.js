// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// function isPalindrome(num){
//   var numArr = num.toString().split(""),
//       len = numArr.length;

//   for(var i = 0; i < Math.floor(len/2); i++){
//     if ( numArr[i] !== numArr[len-1-i] ){
//        return false;
//     }
//   }
//   return true;
// }

// function palindromeProduct(one, two){
//   var product = one * two;

//   console.log(one, two)
//   if( isPalindrome(product) ){
//     return product;
//   }
//   else{
//     if( one * two-1 > one-1 * two ){
//       one = one - 1;
//       return palindromeProduct( one, two );
//     }
//     else{
//       two = two -1
//       return palindromeProduct( one, two );
//     }
//   }
// }

// console.log( palindromeProduct(999, 999) );
//////////////////////////////////////////////////////////////////////////////

function largestPalindrome(){

    var arr = [];
    for( var i=999; i>100; i-- ){
        for( var j=999; j>100; j-- ){
            var product = j*i;
            if(isPalin( product )){
                arr.push( j * i );
            }
        }
    }

    return Math.max.apply(Math, arr);
}

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
}

// console.log(largestPalindrome());

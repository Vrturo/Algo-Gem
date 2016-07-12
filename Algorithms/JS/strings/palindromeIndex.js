// Given a string of lowercase letters, determine the index of the character whose removal will make a palindrome.
// If the string is already a palindrome or no such character exists, then print -1.
// There will always be a valid solution, and any correct answer is acceptable.
// For example, if  string = "bcbc", we can either remove 'b' at index 0 or 'c' at index 3.

// Input Format

// The first line contains an integer, T, denoting the number of test cases.
// Each line i of the T subsequent lines (where 0 <= i < T) describes a test case in the form of a single string.

// Constraints

// All characters are lowercase English letters.
// Output Format

// Print an integer denoting the zero-indexed position of the character that makes string not a palindrome;
// if string is already a palindrome or no such character exists, print -1.

// Sample Input

// 3
// aaab
// baa
// aaa
// Sample Output

// 3
// 0
// -1
// Explanation

// Test Case 1: "aaab"
// Removing 'b' at index 3 results in a palindrome, so we print 3 on a new line.

// Test Case 2: "baa"
// Removing 'b' at index 0 results in a palindrome, so we print 0 on a new line.

// Test Case 3: "aaa"
// This string is already a palindrome, so we print -1; however, 0, 1, and 2 are also all acceptable answers,
// as the string will still be a palindrome if any one of the characters at those indices are removed.


function processData(input) {

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
    };

    function helper( str, count ){

        if( isPalindrome( str ) ){
           console.log(count)
       }
       else {
           console.log(-1)
           helper( str, count +1 )
       };


    }

   var num = input[0],
       arr = input.slice(1);

   for( var i = 0; i < num; i++ ){ // each string aaab, baa, aaa
       var str = arr[i],
           len = str.length,
           counter = 1,
           newArr = str.slice( counter );
       for( var j = 0; j < str.length; j++ ){
          helper(newArr, counter);
       }

   }

}

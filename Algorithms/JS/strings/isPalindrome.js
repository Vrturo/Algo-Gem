// Given an input string, determine whether any anagram of the string is a palindrome


//  palindrome, considering only alphanumeric characters and ignoring cases.

// set a dictionary hash that gets checked, only if the index char of the str and the end pointer
// match as part of the Dictionary

function isPalindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";

  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join('');
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";

  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}


// function isPalindrome(str){
//   var dict = {
//     a: true,
//     b: true,
//     c: true,
//     d: true,
//     e: true,
//     ....
//     z: true.
//     A: true,
//     B: true,
//     C: true,
//     ....
//     Z: true
//   };
//   var len = str.length;
//   // str = str.toLowerCase(); // if uppercases are in the the hash no need to lowercase the string
//   var pointer = len-1
//   for(var i = 0; i < Math.floor(len/2); i++){
//       if (dict[str[i]] === true && dict[str[pointer]] === true){
//         if (str[i] !== str[pointer]){
//           return false;
//         };
//       }
//       else if(dict[str[pointer]] !== false){
//         pointer--;
//       }
//       pointer--;
//   }
//   return true;
// }

var isPalindrome = function(str) {
  var s = str.toUpperCase().replace(/[\W_]+/g,"");
  var len = Math.floor(s.length -1);
  var counter = 0;
      for(var i = len; i > len/2; i--){
          if (s[i]!== s[counter]){
               return false;
          }
          counter++;
       }
  return true;
};


function isPalindrome(str){
  var len = str.length;
  for(var i = 0; i < Math.floor(len/2); i++){
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
  for(var i = 0; i < Math.floor(len/2); i++){
    if (s[i]!== s[len -1 -i])
       return false;
  }
  return true;
};

var isPalindrome = function(str) {
  var s = str.toUpperCase().replace(/[\W_]+/g,"");
  var len = s.length;
  var counter = 0;
      for(var i = len - 1; i > Math.floor(len/2); i--){
          if (s[i]!== s[counter])
               return false;
          counter++;
       }
  return true;
};



// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.

// 1    2     3
//     abc   def

//  4    5    6
// ghi  jkl  mno

//  7    8    9
// pqrs tuv  wxyz

// Input: Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


//Logic

// create a library array to store letters in sub arrays the corresponding number as the index
// if digits is null or empty return empty array
// create a var temp to store a temp array
// create a getString function that takes the digits string, temp array, result array, and our letter library
  // set a base case of digits length is 0
    //if digits length is 0
      // create an array
      // loop through temp array
      // set arr = temp
      // join array and push it into result
    // grab first digit of substring and parse into integer and set it to currentDigit
    // create a letters variable that check against the letter library returns the set of letters of that digit
    // loop through the letters
      // push the first letter of the set of letters into temp
      // run the getString function digits, temp array, final result array, and the letter library
      // remove whats in temp with pop
// call getString function on remainding digits, temp array, final result array, and the letter library
// return result



var letterCombinations = function(digits) {
     var letterLib = [];
         letterLib[2]="abc";
         letterLib[3]="def";
         letterLib[4]="ghi";
         letterLib[5]="jkl";
         letterLib[6]="mno";
         letterLib[7]="pqrs";
         letterLib[8]="tuv";
         letterLib[9]="wxyz";
         letterLib[0]="";
    var result = [];
    if(digits === null || digits.length === 0){
        return result;
    }
    var temp = [];

    function getString(digits, temp, result, letterLib){
        if(digits.length === 0){
            var arr = [];
            for(var i=0; i<temp.length; i++){
                arr[i] = temp[i];
            }
            result.push(arr.join(''));
            return;
        }
        var currentDigit = parseInt(digits.substring(0,1));
        var letters = letterLib[currentDigit];
        for(var i=0; i<letters.length; i++){
            temp.push(letters.charAt(i));
            getString(digits.substring(1), temp, result, letterLib);
            temp.pop();
        }
    }
    getString(digits, temp, result, letterLib);
    return result;
};



// -----------------------------

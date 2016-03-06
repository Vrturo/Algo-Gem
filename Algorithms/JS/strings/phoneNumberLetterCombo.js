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
    getString(digits, temp, result, letterLib);
    return result;
};

function getString(digits, temp, result, letterLib){
    if(digits.length === 0){
        var arr = [];
        for(var i=0; i<temp.length; i++){
            arr[i] = temp[i];
        }
        result.push(arr.join(''));
        return;
    }

    var curr = parseInt(digits.substring(0,1));
    var letters = letterLib[curr];
    for(var i=0; i<letters.length; i++){
        temp.push(letters.charAt(i));
        getString(digits.substring(1), temp, result, letterLib);
        temp.pop();
    }
}

// -----------------------------

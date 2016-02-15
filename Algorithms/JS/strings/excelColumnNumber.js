// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28

var titleToNumber = function(s) {
    var map = {},
    result = 0;
    for (var j = 0; j != 26; j++){
        map[String.fromCharCode(j + 65)] = j + 1;  // populate object keys with alphabet, and add number value
    }

    s.split('').forEach(function(currentVal,i,arr){
        result += map[currentVal] * (Math.pow(26,arr.length - 1 - i ) );
    })
    return result;
};
